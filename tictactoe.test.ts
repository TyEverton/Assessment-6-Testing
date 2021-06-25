import { Builder, Capabilities, By } from "selenium-webdriver"

const { expect, test, describe, toHaveReturnedWith } = require('@jest/globals')

const chromedriver = require('chromedriver')

const { placePiece, initializeBoard, updateBoard, isBoardFull, xyToCell, findWInner, computerMove, checkGameOver, makeHumanMove, handleClick } = require('./tictacjs.html')

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

describe('functionality tests', function() {
    test('should return symbol in cell 9', function () {
        expect(placePiece(9)).toHaveReturnedWith('X' || "O")
    })
});