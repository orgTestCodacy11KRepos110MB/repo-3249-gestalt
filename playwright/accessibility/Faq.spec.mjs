// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Faq Accessibility check', async ({ page }) => {
  await page.goto('/get_started/faq');
  await expectAccessiblePage({ page });
});
