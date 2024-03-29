// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Pulsar Accessibility check', async ({ page }) => {
  await page.goto('/web/pulsar');
  await expectAccessiblePage({ page });
});
