const playwright = require('playwright');

const webScrap = {
  async getData() {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
    const books = await page.$$eval('.caption', all_items => {
        const data = [];
        all_items.forEach(book => {
            const name = book.querySelector('.title').innerText;
            if (name.includes('Lenovo')) {
              const price = book.querySelector('h4').innerText;
              data.push({ name, price });
            }
        });
        return data;
    });
    console.log(books);
    await browser.close();
    return books;
},
}



module.exports = webScrap