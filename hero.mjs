import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const origDir = "file:///C:/Users/safety-shirley/mp-electric-work/src/app/figma%20desgin/MP%20Electric%20web%20figma/";
const width = 1280;
const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 760, deviceScaleFactor: 1 });

const shots = [
  ["mine-hero", "http://localhost:3123/"],
  ["orig-hero", origDir + "index.html"],
];
for (const [name, url] of shots) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1400));
  await page.screenshot({ path: `./shots/${name}.png` }); // viewport only
  console.log("saved", name);
}
await browser.close();
