import { test as base } from '@playwright/test'
import { PageManager } from '../pages/page-manager'

type FixtureTypes = {
pom: PageManager
}

export const test = base.extend<FixtureTypes>({
pom: async({page}, use) => {
await page.goto('/')
const manager = new PageManager(page)
await use (manager)
}
})