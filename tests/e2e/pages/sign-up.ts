import { expect, Locator, Page } from "@playwright/test"

interface RegisterForm {
  nif: string
  name: string
  email: string
  password: string
}

export class SignUpPage {
  private page: Page
  private nifInput: Locator
  private nameInput: Locator
  private emailInput: Locator
  private passwordInput: Locator
  private registerButton: Locator

  constructor(page: Page) {
    this.page = page
    this.nifInput = page.getByRole("textbox", { name: "NIF" })
    this.nameInput = page.getByRole("textbox", { name: "Name" })
    this.emailInput = page.getByRole("textbox", { name: "Email" })
    this.passwordInput = page.getByRole("textbox", { name: "Password" })
    this.registerButton = page.getByRole("button", { name: "Register" })
  }

  async navigate() {
    await this.page.goto("/sign-up", { waitUntil: "domcontentloaded" })
  }

  async fillRegisterForm(registerForm: RegisterForm) {
    await this.nifInput.fill(registerForm.nif)
    await this.nameInput.fill(registerForm.name)
    await this.emailInput.fill(registerForm.email)
    await this.passwordInput.fill(registerForm.password)
  }

  async submitRegister() {
    await this.registerButton.click()
  }

  async awaitRegisterResponse(status: number) {
    return this.page.waitForResponse((response) => response.status() === status)
  }

  async showMessage(message: string) {
    const toast = this.page.getByText(message)
    await expect(toast).toBeVisible()
  }
}
