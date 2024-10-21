
const pupeteer = require('puppeteer')


describe ('Mi prueba de click e input', () =>{
    /*it('Navegar por pagina',async()=>{
    const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    //va a pagina
    await page.goto('http://devexpress.github.io/testcafe/example/')
    await page.waitForSelector("#developer-name");
    //despues a otra
    await page.goto('http://example.com');
    await page.waitForSelector("h1");

    await page.goBack() // va hacia atras
    await page.type('#developer-name', 'Luis',{delay: 500});
    await page.click('#submit-button');
    
 
    //await page.waitForTimeout(1000)
    await browser.close();
    })*/
    
    /*it('debe escribir mi nombre',async()=>{
    const browser = await pupeteer.launch({ headless: false});   
    const page = await browser.newPage();
    await page.goto('http://devexpress.github.io/testcafe/example/')
    
    await page.waitForSelector("#developer-name");
    await page.type('#developer-name', 'Luis',{delay: 500});
    await page.click('#submit-button');
    
 
    //await page.waitForTimeout(1000)
    await browser.close();
    })*/

    /*it('debe imprimir titulo y url',async()=>{
        const browser = await pupeteer.launch({ headless: false});   
        const page = await browser.newPage();
        await page.goto('http://example.com');
        
        const title = await page.title();//regresa titulo

        const url = await page.url();

        console.log('title', title);
        console.log('url ', url);
        
        await browser.close();
        })*/

        it('debe validar texto ',async()=>{
            const browser = await pupeteer.launch({ headless: false});   
            const page = await browser.newPage();
            await page.goto('http://example.com');
            
            const title = await page.title();//regresa titulo
    
            const url = await page.url();
            //recupera el texto
            const text = await page.$eval('h1', (element) => element.textContent)   //regresa elemento $$ lista
            const itextoHtmL = await page.$eval('body > div', (element) => element.innerHTML)
            console.log('title', title);
            console.log('url ', url);
            console.log(text);
            console.log(itextoHtmL);
            
            
            
            await browser.close();
            })

})