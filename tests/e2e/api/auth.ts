import { Page } from "@playwright/test"

export class AuthApi {
  static async signUpSuccess(page: Page) {
    await page.route("**/users/create", async (route) => {
      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({ message: "Account created successfully" }),
      })
    })
  }

  static async signUpWithNifAlreadyRegistered(page: Page) {
    await page.route("**/users/create", async (route) => {
      await route.fulfill({
        status: 409,
        contentType: "application/json",
        body: JSON.stringify({ message: "NIF already registered" }),
      })
    })
  }

  static async signUpWithEmailAlreadyRegistered(page: Page) {
    await page.route("**/users/create", async (route) => {
      await route.fulfill({
        status: 409,
        contentType: "application/json",
        body: JSON.stringify({ message: "Email already registered" }),
      })
    })
  }
}
