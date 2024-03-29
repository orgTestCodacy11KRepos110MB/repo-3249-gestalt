// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Collage Accessibility check', async ({ page }) => {
  await page.goto('/web/collage');
  await expectAccessiblePage({ page });
});
