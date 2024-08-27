const { test, expect } = require('@playwright/test');

// Тест для проверки заголовка страницы
test('Проверка заголовка страницы Playwright', async ({ page }) => {
  // Открываем страницу
  await page.goto('https://playwright.dev/');

  // Проверяем, что страница существует, и был получен успешный ответ (статус 200)
  const response = await page.waitForResponse(response => response.status() === 200);
  expect(response.ok()).toBeTruthy();

  // Проверяем заголовок страницы
  const title = await page.title();
  expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});

