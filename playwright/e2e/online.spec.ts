import { test, expect } from '@playwright/test';

/// AAA (Arrange, Act, Assert)
test('test', async ({ page }) => {

  // Arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading', { name: 'Velô Sprint' })).toBeVisible();
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  
  // Act
  await page.getByTestId('search-order-id').click();
  await page.getByTestId('search-order-id').fill('VLO-I2A5YA');
  await page.getByTestId('search-order-button').click();

  // Assert
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-I2A5YA');
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});