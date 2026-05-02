import { test } from "@playwright/test"
import { SignUpPage } from "./pages/sign-up"
import { AuthApi } from "./api/auth"

test("Sign-Up Successfully", async ({ page }) => {
  const signUpPage = new SignUpPage(page)
  await AuthApi.signUpSuccess(page)

  await test.step("Given I am on the sign-up page", async () => {
    await signUpPage.navigate()
  })

  await test.step("When I fill in the sign-up form and submit", async () => {
    await signUpPage.fillRegisterForm({
      nif: "000000000AA000",
      name: "John Doe",
      email: "john1@email.com",
      password: "password",
    })

    await Promise.all([
      signUpPage.awaitRegisterResponse(201),
      signUpPage.submitRegister(),
    ])
  })

  await test.step("Then I should see a success message", async () => {
    await signUpPage.showMessage("Account created successfully")
  })
})

test("Sign-Up with NIF already registered", async ({ page }) => {
  const signUpPage = new SignUpPage(page)
  await AuthApi.signUpWithNifAlreadyRegistered(page)

  await test.step("Given Iam on the Sign Up Page", async () => {
    await signUpPage.navigate()
  })

  await test.step("When I fill the form using an NIF already registered", async () => {
    await signUpPage.fillRegisterForm({
      nif: "000000000AA000",
      name: "John Doe",
      email: "john2@email.com",
      password: "password",
    })

    await Promise.all([
      signUpPage.awaitRegisterResponse(409),
      signUpPage.submitRegister(),
    ])
  })

  await test.step("Then I should see an erro message nif already registered", async () => {
    await signUpPage.showMessage("NIF already registered")
  })
})

test("Sign-Up with Email already registered", async ({ page }) => {
  const signUpPage = new SignUpPage(page)
  await AuthApi.signUpWithEmailAlreadyRegistered(page)

  await test.step("Gigev Iam on Sign Up Page", async () => {
    await signUpPage.navigate()
  })

  await test.step("When I fill the form using an Email already registered", async () => {
    await signUpPage.fillRegisterForm({
      nif: "000000000AA000",
      name: "John Doe",
      email: "john2@email.com",
      password: "password",
    })

    await Promise.all([
      signUpPage.awaitRegisterResponse(409),
      signUpPage.submitRegister(),
    ])
  })

  await test.step("Then I should see an error toast message email already registered", async () => {
    await signUpPage.showMessage("Email already registered")
  })
})
