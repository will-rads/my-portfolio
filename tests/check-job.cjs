// Run against the static preview: PLAYWRIGHT_MODULE=/path/to/playwright node tests/check-job.cjs
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5599/job/';
const failures = [];
async function check(name, fn) {
  try { await fn(); console.log('PASS', name); }
  catch (error) { failures.push(name); console.error('FAIL', name, error.message.split('\n')[0]); }
}
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    page.setDefaultTimeout(4000);
    page.setDefaultNavigationTimeout(30000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.locator('.folder').first().click();
    await check('phone folder preview is readable', async () => {
      const preview = page.locator('.fstage-card, .folder.staged .fitem').first();
      const bounds = await preview.boundingBox();
      assert.ok(bounds.width >= 250, `preview is only ${Math.round(bounds.width)}px wide`);
    });
    await check('folder has visible next and previous controls', async () => {
      await page.getByRole('button', { name: 'Next item', exact: true }).click();
      assert.match(await page.locator('.fstage-count').textContent(), /2\s*\/\s*4/);
      await page.getByRole('button', { name: 'Previous item', exact: true }).click();
      assert.match(await page.locator('.fstage-count').textContent(), /1\s*\/\s*4/);
    });
    await check('keyboard focus stays inside the open folder', async () => {
      for (let i = 0; i < 12; i++) {
        await page.keyboard.press('Tab');
        assert.ok(await page.evaluate(() => document.activeElement === document.body || !!document.activeElement.closest('.fstage')));
      }
    });
    await page.keyboard.press('Escape');
    await check('all four folders open, browse, close, and restore focus', async () => {
      for (let i = 0; i < 4; i++) {
        const folder = page.locator('.folder').nth(i);
        await folder.click();
        const items = await page.locator('.fstage-item').count();
        assert.equal(items, [4, 3, 3, 3][i]);
        for (let n = 1; n < items; n++) await page.keyboard.press('ArrowRight');
        assert.equal(await page.locator('.fstage-count').textContent(), `${items} / ${items}`);
        await page.getByRole('button', { name: 'Close folder', exact: true }).click();
        assert.ok(await folder.evaluate(el => el === document.activeElement));
        assert.equal(await page.evaluate(() => document.body.style.overflow), '');
      }
    });
    await page.locator('.lrow summary').first().click();
    await page.locator('.ba-01 .pv-open').last().click();
    await check('mobile brochure keeps a link to the full original', async () => {
      assert.ok(await page.locator('#lb').isVisible(), 'View left the portfolio for a screenshot');
      assert.equal(await page.locator('#lbLink').getAttribute('href'), 'https://namou-brochures.vercel.app/maireed-5576-sqft-plot/');
      assert.match(await page.locator('#lbImage img').getAttribute('src'), /brochure-after-v2\.png/);
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
        assert.ok(await page.evaluate(() => document.activeElement === document.body || !!document.activeElement.closest('#lb')));
      }
      await page.locator('#lbClose').click();
    });
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.locator('.lrow summary').first().click();
    await page.locator('.ba-01 .pv-open').first().click();
    await check('PDF preview always offers the original file', async () => {
      assert.ok(await page.locator('#lbLink').isVisible());
      assert.match(await page.locator('#lbLink').getAttribute('href'), /brochure-maireed-5505-before\.pdf/);
    });
    await page.locator('#lbClose').click();
    await page.locator('.ba-01 .pv-open').first().click();
    await check('reopening a preview cannot clear the new preview', async () => {
      await page.waitForTimeout(400);
      assert.match(await page.locator('#lbFrame').getAttribute('src'), /brochure-maireed-5505-before\.pdf/);
    });
    await page.locator('#lbClose').click();
    await check('ordinary animation survives rapid reopening and resizing', async () => {
      await page.emulateMedia({ reducedMotion: 'no-preference' });
      await page.reload({ waitUntil: 'domcontentloaded' });
      const folder = page.locator('.folder').first();
      await folder.click();
      await page.keyboard.press('Escape');
      await folder.click();
      await page.getByRole('button', { name: 'Next item', exact: true }).click();
      await page.waitForFunction(() => document.querySelector('.fstage-count').textContent === '2 / 4');
      await page.waitForTimeout(600);
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(150);
      assert.equal(await page.locator('.fstage-count').textContent(), '2 / 4');
      await page.keyboard.press('Escape');
      await page.emulateMedia({ reducedMotion: 'reduce' });
    });
    await check('site thumbnails do not embed a site that blocks frames', async () => {
      assert.equal(await page.locator('.shot iframe[data-lazy]').count(), 0);
    });
    await page.setViewportSize({ width: 320, height: 740 });
    await check('narrow phones have no horizontal page overflow', async () => {
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    });
    await check('local images and document links resolve', async () => {
      const urls = await page.evaluate(() => Array.from(new Set(
        Array.from(document.querySelectorAll('img[src], [data-src], [data-mobile-src], [data-href]'))
          .flatMap(el => ['src', 'data-src', 'data-mobile-src', 'data-href'].map(attr => el.getAttribute(attr)))
          .filter(value => value && value.startsWith('../assets/'))
          .map(value => new URL(value, location.href).href)
      )));
      for (const url of urls) assert.equal((await page.request.head(url)).status(), 200, url);
    });
    await check('page has no JavaScript exceptions', () => assert.deepEqual(errors, []));
  } finally { await browser.close(); }
  if (failures.length) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });
