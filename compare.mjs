import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const width = Number(process.argv[2]) || 1440;
const origDir = "file:///C:/Users/safety-shirley/mp-electric-work/src/app/figma%20desgin/MP%20Electric%20web%20figma/";

const targets = [
  ["orig-home", origDir + "index.html"],
  ["orig-services", origDir + "services.html"],
  ["orig-about", origDir + "about.html"],
  ["orig-contact", origDir + "contact.html"],
  ["orig-infrastructure", origDir + "infrastructure.html"],
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });

for (const [name, url] of targets) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 800));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 300));
  const out = `./shots/mpew-${name}-${width}.png`;
  await page.screenshot({ path: out, fullPage: true });
  console.log("saved", out);
}
await browser.close();
