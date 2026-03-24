import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

async function dismissCookieBanner(page: Page) {
  const essentialOnly = page.getByRole("button", { name: "Essential Only" });
  if (await essentialOnly.isVisible().catch(() => false)) {
    await essentialOnly.click();
  }
}

test("mobile menu, theme toggle, and CTA flow work", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Contact" })).toBeVisible();

  await page.getByRole("button", { name: /Switch to light mode|Switch to dark mode/ }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", /light|dark/);

  await page.getByRole("button", { name: "Toggle menu" }).click();

  await dismissCookieBanner(page);

  await page.getByRole("link", { name: "Start a Conversation" }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: /Start the Conversation/, level: 1 })).toBeVisible();
});

test("contact form submits successfully", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        message: "Enquiry submitted successfully. Our team will contact you shortly.",
      }),
    });
  });

  await page.goto("/contact");
  await dismissCookieBanner(page);

  await page.getByLabel("Full Name *").fill("Test User");
  await page.getByLabel("Email Address *").fill("test@example.com");
  await page.getByLabel("Company Name").fill("AURMAK QA");
  await page.getByRole("combobox").selectOption("General Advisory");
  await page.locator("textarea").fill("Smoke test for contact submission.");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();

  await expect(page.getByText("Enquiry Submitted Successfully")).toBeVisible();
  await expect(page.getByText("Our team will contact you shortly.")).toBeVisible();
});

test("case study discovery call modal opens", async ({ page }) => {
  await page.goto("/smart-building-platform");
  await dismissCookieBanner(page);

  await page.getByRole("button", { name: "Book 30 Min Discovery Call" }).click();
  await expect(page.locator(".calendly-overlay")).toBeVisible();
});
