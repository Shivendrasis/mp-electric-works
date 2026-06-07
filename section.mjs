import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const origDir = "file:///C:/Users/safety-shirley/mp-electric-work/src/app/figma%20desgin/MP%20Electric%20web%20figma/";
const BASE = "http://localhost:3123";

// [name, minePath, origFile, selector]
const jobs = [
  ["svc-featured", "/services", "services.html", ".feature-svc"],
  ["about-media", "/about", "about.html", ".about-media,.story-media"],
  ["about-vm", "/about", "about.html", ".vm-grid"],
  ["infra-bento", "/infrastructure", "infrastructure.html", ".infra-hero"],
  ["infra-measure", "/infrastructure", "infrastructure.html", ".measure"],
  ["contact-form", "/contact", "contact.html", ".form-card"],
];

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 760, deviceScaleFactor: 1 });

async function shoot(url, selector, out) {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluate((sel) => {
    const el = document.querySelector(sel.split(",")[0]) || document.querySelector(sel.split(",")[1]);
    if (el) el.scrollIntoView({ block: "center" });
  }, selector);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: out });
}

for (const [name, mine, orig, sel] of jobs) {
  await shoot(BASE + mine, sel, `./shots/cmp-${name}-mine.png`);
  await shoot(origDir + orig, sel, `./shots/cmp-${name}-orig.png`);
  console.log("done", name);
}
await browser.close();
