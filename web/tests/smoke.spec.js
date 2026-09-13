const { test, expect } = require('@playwright/test');

test('BlockPay QA POC page loads', async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>BlockPay QA Proof of Concept</h1>
        <p>Web automation is working.</p>
      </body>
    </html>
  `);

  await expect(
    page.getByRole('heading', { name: 'BlockPay QA Proof of Concept' })
  ).toBeVisible();

  await expect(
    page.getByText('Web automation is working.')
  ).toBeVisible();
});