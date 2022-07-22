const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Functional Test Kanji/Arabic', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Functional Test Kanji/Arabic', async function() {
    await driver.get("https://www.hudl.com/login/")
    await driver.manage().window().setRect({ width: 1087, height: 855 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("学習漢字教育漢字,")
    await driver.findElement(By.id("password")).sendKeys("الْأَبْجَدِيَّة الْعَرَبِيَّة")
    await driver.findElement(By.id("logIn")).click()
    {
      const elements = await driver.findElements(By.css(".uni-text"))
      assert(elements.length)
    }
  })
})
