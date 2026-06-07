import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:3123";
const pages = process.argv[2] ? [process.argv[2]] : [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["industries", "/industries"],
  ["infrastructure", "/infrastructure"],
  ["gallery", "/gallery"],
  ["clients", "/clients"],
  ["contact", "/contact"],
];

const width = Number(process.argv[3]) || 1440;
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", `--window-size=${width},1000`],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });

const logs = [];
page.on("console", (m) => {
  const t = m.text();
  if (/warn|error|Image|width|height/i.test(t)) logs.push(`[${m.type()}] ${t}`);
});

for (const [name, path] of (Array.isArray(pages[0]) ? pages : [["shot", pages[0]]])) {
  await page.goto(BASE + path, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 900)); // let reveals settle
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 600));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 300));
  const out = `./shots/mpew-${name}-${width}.png`;
  await page.screenshot({ path: out, fullPage: true });
  console.log("saved", out);
}
if (logs.length) {
  console.log("\n--- console warnings ---");
  console.log([...new Set(logs)].join("\n"));
}
await browser.close();
