const pupeteer = require('puppeteer')

describe ('Comparar precio en ML', () =>{
    it('Debe coincidir precio inicial',async () => {
    const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    const subtitleOfertas = "span.header_subtitle"
    const textoOfertas1= "//a[normalize-space()='Ofertas']";
    const articulo1 = "a.poly-component__title:nth-of-type(1)";
    const buttonCart = "button.andes-button.andes-spinner__icon-base.ui-pdp-action--secondary.andes-button--quiet span.andes-button__content"
    const precioArticulo1 = "div.ui-pdp-price__main-container div.ui-pdp-price__second-line span.andes-money-amount__fraction";
    await page.goto('https://www.mercadolibre.com.mx/')
    
    await page.waitForSelector(articulo1);
    await page.click(articulo1);
    
    await page.waitForSelector(precioArticulo1);
    
    const priceMain = await page.$eval(precioArticulo1, (element) => element.textContent)
    console.log(priceMain);
    
    await page.waitForSelector(buttonCart);
    const target = await page.$(buttonCart);
    await target.scrollIntoView();
    await page.click(buttonCart);
    
    await browser.close();
    })
})