// @flow strict
import { test } from '@playwright/test';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('OnLinkNavigationProvider Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/onlinknavigationprovider');
  await expectAccessiblePage({ page });
});
