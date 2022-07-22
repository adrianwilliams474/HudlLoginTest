const {username, password} = require('../config');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Happy Path Login', function() {
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
  it('Happy Path Login', async function() {
    await driver.get("https://www.hudl.com/login/")
    await driver.manage().window().setRect({ width: 1087, height: 855 })
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys(username)
    await driver.findElement(By.id("password")).sendKeys(password)
    await driver.findElement(By.id("logIn")).click()
   
    {
      const elements = await driver.findElements(By.css(".hui-globaluseritem__display-name"))
      assert(elements.length)
    }
  })
});
