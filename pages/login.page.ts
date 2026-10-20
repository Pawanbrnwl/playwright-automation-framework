import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import {step} from '../helpers/test-step-decorator'

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;
  private forgetPasswordLink : Locator;
  private requiredInputField : Locator;

  public constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('username');
    this.passwordInput = page.getByPlaceholder('password');
    this.loginButton = page.getByRole('button',{name:'Login'});
    this.errorMessage = page.getByText("Invalid credentials");
    this.forgetPasswordLink = page.locator(".orangehrm-login-forgot");
    this.requiredInputField = page.locator("[class*='input-field-error-message']");
  }

  @step
  public async open(): Promise<void> {
    await this.page.goto('/');
  }

  @step
  public async doLogin(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  @step
  public async fillUserName(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

    @step
  public async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
  }

     @step
  public async clickOnLoginBtn(): Promise<void> {
        await this.loginButton.click();
  }

  @step
  public async assertLoginError(message: string): Promise<void> {
    await expect(this.errorMessage).toContainText(message);
  }

  @step
  public async assertRequiredFieldErrorVisible()
  {
    await expect(this.requiredInputField.first()).toBeVisible();
  }
}
