import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.env.URL || "http://localhost:4317/";
const OUT = "/tmp/shots";
const width = Number(process.env.W || 375);
const tag = process.env.TAG || `m${width}`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 800, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle0" });

// Measure section heights
const sections = await page.evaluate(() => {
  const ids = ["home", "about", "achievements", "experience", "work", "contact"];
  return ids.map((id) => {
    const el = document.getElementById(id);
    const r = el.getBoundingClientRect();
    return { id, top: Math.round(r.top + window.scrollY), height: Math.round(r.height) };
  });
});
console.log("Body scrollHeight:", await page.evaluate(() => document.body.scrollHeight));
console.table(sections);

for (const s of sections) {
  await page.evaluate((id) => {
    document.getElementById(id).scrollIntoView({ behavior: "instant", block: "start" });
  }, s.id);
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: `${OUT}/${tag}-${s.id}.png` });
}

await browser.close();
console.log("done", tag);
