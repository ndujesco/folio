import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.env.URL || "http://localhost:4317/";
const OUT = "/tmp/shots";

const viewports = [
  { name: "mobile-320", width: 320, height: 720 },
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-414", width: 414, height: 896 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

const report = [];

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle0" });
  // Scroll through to trigger whileInView reveals, then back to top.
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y);
        y += window.innerHeight * 0.8;
        if (y < document.body.scrollHeight) setTimeout(step, 60);
        else { window.scrollTo(0, 0); setTimeout(res, 200); }
      };
      step();
    });
  });
  await new Promise((r) => setTimeout(r, 400));

  // Detect horizontal overflow (the #1 mobile bug).
  const overflow = await page.evaluate(() => {
    const docW = document.documentElement.clientWidth;
    const offenders = [];
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > docW + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 60),
          right: Math.round(r.right),
          left: Math.round(r.left),
        });
      }
    });
    return {
      scrollW: document.documentElement.scrollWidth,
      clientW: docW,
      hasOverflow: document.documentElement.scrollWidth > docW + 1,
      offenders: offenders.slice(0, 8),
    };
  });

  await page.screenshot({ path: `${OUT}/${vp.name}.png`, fullPage: true });
  report.push({ vp: vp.name, ...overflow });
  await page.close();
}

await browser.close();

console.log(JSON.stringify(report, null, 2));
for (const r of report) {
  const flag = r.hasOverflow ? "❌ OVERFLOW" : "✅ ok";
  console.log(`${flag}  ${r.vp}  scrollW=${r.scrollW} clientW=${r.clientW}`);
}
