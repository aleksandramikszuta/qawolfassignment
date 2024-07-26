// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const newest = page.locator("a[href='newest']");
  const age = page.locator('.age');
  const more = page.locator('.morelink');

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");
  await newest.click();
  let ages = await age.all();
  let currentAgeIndex = 0;
  let currentAge = ages[currentAgeIndex].getAttribute("title");


  for(let i=1; i<100; i++) {
    if (currentAgeIndex > ages.length) {
      await next.click();
    }
  }
}

(async () => {
  await sortHackerNewsArticles();
})();
