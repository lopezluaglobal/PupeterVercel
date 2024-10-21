const pupeteer = require('puppeteer');


async function pruebaDeNavgador (){
    const browser = await pupeteer.launch({ headless: false, slowMo:500});   
    const page = await browser.newPage();
    await page.goto('http:/example.com')
    await page.waitForSelector('h1');
    await browser.close();

}

pruebaDeNavgador();