import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function crawlWebsite(url: string): Promise<{ title: string; text: string }> {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    await driver.get(url);
    const title = await driver.getTitle();
    console.log(title, 'title');
    const body = await driver.findElement(By.css('body'));
    const text = await body.getText();
    console.log(text, 'text');
    return { title, text };
  } finally {
    await driver.quit();
  }
}
