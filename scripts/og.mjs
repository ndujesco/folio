import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:4317/";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars"],
});

// --- OG image: 1200x630, hero with "Full-Stack Software Engineer" typed ---
const og = await browser.newPage();
await og.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await og.goto(URL, { waitUntil: "networkidle0" });
// Wait until the typewriter has fully typed the first role.
await og.waitForFunction(
  () => document.body.innerText.includes("Full-Stack Software Engineer"),
  { timeout: 8000 }
);
await new Promise((r) => setTimeout(r, 150));
await og.screenshot({ path: "public/og.png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
console.log("og.png written");

// --- Verification shots of the redesigned sections ---
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await p.goto(URL, { waitUntil: "networkidle0" });
for (const id of ["home", "about", "achievements"]) {
  await p.evaluate((i) => document.getElementById(i).scrollIntoView({ block: "start" }), id);
  await new Promise((r) => setTimeout(r, 500));
  await p.screenshot({ path: `/tmp/shots/v-${id}.png` });
}

// mobile hero too
const m = await browser.newPage();
await m.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
await m.goto(URL, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 500));
await m.screenshot({ path: "/tmp/shots/v-mobile-home.png" });

await browser.close();
console.log("done");
