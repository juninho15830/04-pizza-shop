import { test, expect } from '@playwright/test';

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação à ontem')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.locator('div').filter({ hasText: /^200\+7% em relação ao mês passado$/ }).getByRole('paragraph')).toBeVisible()
})

test('display month canceled orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('R$ 20,00')).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado').first()).toBeVisible()
})
