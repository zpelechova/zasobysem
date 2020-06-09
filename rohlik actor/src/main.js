const Apify = require('apify');
Apify.main(async () => {
    // const input = await Apify.getValue('INPUT');
    console.log('Launching Puppeteer...');
    const browser = await Apify.launchPuppeteer();

    console.log('Going to rohlik.cz ...');
    const page = await browser.newPage();
    await page.goto('https://www.rohlik.cz/');

    console.log('Looking for button with delivery slots...');

    await page.waitForSelector("#header button[aria-label='časové sloty pro dopravu'] > strong");
    await page.focus("#header button[aria-label='časové sloty pro dopravu'] > strong");
    await page.waitFor(500);

    console.log('Clicking on the button for delivery slots')
    await page.click("#header button[aria-label='časové sloty pro dopravu'] > strong");
    await page.waitForSelector('#streetWithNumber');

    console.log('Getting address input...');
    await page.type('#streetWithNumber', 'Jindřicha Plachty 15', { delay: 100 });
    await page.waitFor(500);
    await page.type('#city', 'Praha 5', { delay: 100 });
    // await page.type('#streetWithNumber', input.street);
    // await page.type('#city', input.city);

    console.log('Submit search form');
    await page.click(".Address__form > [data-test='address-submit']");
    await page.waitForSelector(".AddressModal_wrapper h3");
    const ifDeliver = await page.evaluate(() => document.querySelector(".AddressModal_wrapper h3").innerText);
    console.log(ifDeliver);

    if (ifDeliver === ('Na vaši adresu rozvážíme')) {
        console.log('dobry!');
        console.log('Clicking on Pokracovat v nakupu...');
        await page.click("#__next > div > div.Modal__overlay.address_modal > div > div > div.AddressModal_wrapper > div > div > div.ykaars-0.ixwAGl > div:nth-child(1) > button");
        console.log('Clicking on Pokracovat v nakupu2...');

        await page.waitForSelector("#header button[aria-label='časové sloty pro dopravu']");
        console.log('Clicking on Pokracovat v nakupu3...');

        await page.focus("#header button[aria-label='časové sloty pro dopravu']");
        await page.waitFor(500);

        await page.click("#header button[aria-label='časové sloty pro dopravu']");
        console.log('Clicking on Pokracovat v nakupu4...');

        await page.waitForSelector("#__next > div > div.Modal__overlay.delivery_modal > div > div > div:nth-child(1) > div.sc-11hd33x-0.gXmsGr > div.sc-11hd33x-8.ksnQCP > div > div");
        console.log('Clicking on Pokracovat v nakupu5...');

        const check = await page.evaluate(() => document.querySelector("#__next > div > div.Modal__overlay.delivery_modal > div > div > div:nth-child(1) > div.sc-11hd33x-0.gXmsGr > div.sc-11hd33x-8.ksnQCP > div > div").innerText);
        console.log(check);

        const earliest = await page.evaluate(() => document.querySelector("#header button[aria-label='časové sloty pro dopravu']").innerText);
        console.log(earliest);
    }
});