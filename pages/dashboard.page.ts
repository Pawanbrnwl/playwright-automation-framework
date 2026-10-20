import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { step } from '../helpers/test-step-decorator'
import { array } from 'node:stream/iter';

export class Dashboard extends BasePage {
  private readonly widgetsName: Locator;
  private readonly inventoryItems: Locator;
  private readonly profilePicture: Locator;
  private readonly headerTitle1: Locator;

  public constructor(page: Page) {
    super(page);
    this.widgetsName = page.locator('.orangehrm-dashboard-widget-name');
    this.inventoryItems = page.getByTestId('inventory-item');
    this.profilePicture = page.getByAltText("profile picture");
    this.headerTitle1 = page.locator("[class*='-topbar-header-title']");
  }

  @step
  public async assertPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(await this.getPageHeader()).toContain('Dashboard');
    await expect(this.profilePicture.first()).toBeVisible();
  }

  @step
  public async assertUrl(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  public async AssertWidgetIsVisible(widgetName :string|string[])
  {
    if(Array.isArray(widgetName))
    {
      for (const name of widgetName) {
        await expect.soft(this.widgetsName.getByText(name)).toBeVisible()
      }
    }
    else
    await expect(this.widgetsName.getByText(widgetName)).toBeVisible();
  }


}
