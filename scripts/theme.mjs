import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:4319/";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

async function shoot(scheme, width, name) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 850, deviceScaleFactor: width < 500 ? 2 : 1 });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: scheme }]);
  await page.goto(URL, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 500));
  const htmlClass = await page.evaluate(() => document.documentElement.className.includes("dark") ? "dark" : "light");
  await page.screenshot({ path: `/tmp/shots/${name}-home.png` });
  // scroll to about
  await page.evaluate(() => document.getElementById("about").scrollIntoView({ block: "start" }));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `/tmp/shots/${name}-about.png` });
  // scroll to work
  await page.evaluate(() => document.getElementById("work").scrollIntoView({ block: "start" }));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `/tmp/shots/${name}-work.png` });
  await page.close();
  return htmlClass;
}

// Verify the toggle actually flips by clicking it.
async function toggleTest() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 850, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
  await page.goto(URL, { waitUntil: "networkidle0" });
  const before = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  await page.click('button[aria-label="Switch to light mode"]');
  await new Promise((r) => setTimeout(r, 400));
  const after = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  const stored = await page.evaluate(() => localStorage.getItem("theme"));
  await page.screenshot({ path: "/tmp/shots/toggle-clicked-light.png" });
  await page.close();
  return { before, after, stored };
}

const d = await shoot("dark", 1440, "dk");
const l = await shoot("light", 1440, "lt");
const lm = await shoot("light", 375, "lt-m");
const t = await toggleTest();
await browser.close();
console.log(JSON.stringify({ darkDefault: d, lightDefault: l, lightMobile: lm, toggle: t }, null, 2));
