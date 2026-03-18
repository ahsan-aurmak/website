import { expect, test } from "@playwright/test";

test("mobile menu, theme toggle, and CTA flow work", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Contact" })).toBeVisible();

  await page.getByRole("button", { name: /Switch to light mode|Switch to dark mode/ }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);

  await page.getByRole("button", { name: "Toggle menu" }).click();

  const essentialOnly = page.getByRole("button", { name: "Essential Only" });
  if (await essentialOnly.isVisible().catch(() => false)) {
    await essentialOnly.click();
  }

  await page.getByRole("link", { name: "Start a Conversation" }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: /Start the Conversation/, level: 1 })).toBeVisible();
});
