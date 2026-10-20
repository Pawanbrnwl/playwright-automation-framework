import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  private readonly headerTitle: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.headerTitle = page.locator("[class*='-topbar-header-title']");
  }


  public async waitForUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }

  public async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true
    });
  }

  public async getPageHeader(): Promise<string> {
    return await this.headerTitle.first().innerText();
  }

  public async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  public async assertPageTitle(expectedTitle: string) {
    expect(await this.getPageTitle()).toContain(expectedTitle);
  }

  public async assertPageHeader(expectedHeader: string) {
    expect(await this.getPageHeader()).toContain(expectedHeader!);
  }
  public async navToSideMenuLink(LeftMenuName: string) {
    await this.page.getByLabel("Sidepanel").getByRole('link', { name: LeftMenuName }).click();
    console.log(await this.getPageHeader());
  }
}
