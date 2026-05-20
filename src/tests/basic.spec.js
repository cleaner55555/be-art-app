import { test, expect } from '@playwright/test';

test('homepage has correct title and content', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/BeArt/);
  await expect(page.getByText('BEART')).toBeVisible();
  await expect(page.getByText('Unleash Your Creative Vision')).toBeVisible();
  await expect(page.getByText('Featured Artworks')).toBeVisible();
});
