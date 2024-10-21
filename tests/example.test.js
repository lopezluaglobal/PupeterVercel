const pupeteer = require('puppeteer')

describe ('Mi primer prueba abriendo de un navegador', () =>{
    it('debe de abrir el navegador',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    await page.goto('http:/example.com')
    await page.waitForSelector('h1');
    await browser.close();
    })

    it('debe de abrir el navegador x2',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    await page.goto('http:/example.com')
    await page.waitForSelector('h1');
    await browser.close();
    })
    it('debe de abrir el navegador x3',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    await page.goto('http:/example.com')
    await page.waitForSelector('h1');
    await browser.close();
    })
    
})