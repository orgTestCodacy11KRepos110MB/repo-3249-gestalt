// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Mask Accessibility check', async ({ page }) => {
  await page.goto('/web/mask');
  await expectAccessiblePage({ page });
});
