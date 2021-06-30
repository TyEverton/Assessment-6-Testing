import { Builder, Capabilities, By } from "selenium-webdriver"

const { expect, test, describe, toHaveReturnedWith } = require('@jest/globals')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
})

test('I can click the top right box', async () => {
    const topRightBox = await driver.findElement(By.id('cell-2'))
    topRightBox.click()

    expect(await topRightBox.getText()).toContain("X" || "O")

    await driver.sleep(1500)
})


test('I can click the bottom right box', async () => {
    const bottomRightBox = await driver.findElement(By.id('cell-8'))
    bottomRightBox.click()

    expect(await bottomRightBox.getText()).toContain("X" || "O")

    await driver.sleep(1500)
})

test('I can click the center box', async () => {
    const centerBox = await driver.findElement(By.id('cell-4'))
    centerBox.click()

    expect(await centerBox.getText()).toContain("X" || "O")

    await driver.sleep(1500)
})


