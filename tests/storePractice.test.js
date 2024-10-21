const pupeteer = require('puppeteer')

describe ('Prueba tiendas', () =>{
    it('debe entrar a ofertas por texto',async()=>{
    const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    const subtitleOfertas = "span.header_subtitle"
    const textoOfertas= "//a[normalize-space()='Ofertas']";
    await page.goto('https://www.mercadolibre.com.mx/')
    
    const [response] = await Promise.all([
    await page.waitForSelector(textoOfertas),
    await page.click(textoOfertas)
    ]);
    await page.waitForSelector(subtitleOfertas);
    
    await browser.close();
    })

    it('debe entrar a ofertas por css',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    const subtitleOfertas = "span.header_subtitle"
    const textoOfertas= "a.nav-menu-item-link:nth-of-type(1)";
    await page.goto('https://www.mercadolibre.com.mx/')
    await page.waitForSelector(textoOfertas);
    await page.click(textoOfertas);
    await page.waitForSelector(subtitleOfertas);
    
    await browser.close();
    })
    
    it('debe entrar a ofertas por xpath',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    const subtitleOfertas = "span.header_subtitle"
    const textoOfertas= "//a[@href='https://www.mercadolibre.com.mx/ofertas#nav-header']";
    await page.goto('https://www.mercadolibre.com.mx/')
    await page.waitForSelector('::-p-xpath(//a[@href="https://www.mercadolibre.com.mx/ofertas#nav-header"])');
    await page.click(textoOfertas);
    await page.waitForSelector(subtitleOfertas);
    
    await browser.close();
    })
    
})