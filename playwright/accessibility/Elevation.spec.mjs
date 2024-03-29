// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Elevation Accessibility check', async ({ page }) => {
  await page.goto('/foundations/elevation');
  await expectAccessiblePage({ page });
});
