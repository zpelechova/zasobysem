const Apify = require('apify');
Apify.main(async () => {
    // const input = await Apify.getValue('INPUT');
    console.log('Launching Puppeteer...');
    const browser = await Apify.launchPuppeteer();

    console.log('Going to itesco.cz ...');
    const page = await browser.newPage();
    await page.goto('https://nakup.itesco.cz/groceries/cs-CZ');

    console.log('Looking for button to login...');

    await page.waitForSelector("#main > div.main__content > div > div.home-page--contents-inner-wrapper > div.sc-hzDkRC.igCZeY > div > div.main-banner--content.main-banner--content-signed-out > div > div.main-banner--sign-in-wrapper.sc-iAyFgw.kajHWQ > div.signin-register > div.signin-register--signin > div.signin-register--signin-button > a");
    await page.focus("#main > div.main__content > div > div.home-page--contents-inner-wrapper > div.sc-hzDkRC.igCZeY > div > div.main-banner--content.main-banner--content-signed-out > div > div.main-banner--sign-in-wrapper.sc-iAyFgw.kajHWQ > div.signin-register > div.signin-register--signin > div.signin-register--signin-button > a");
    await page.waitFor(500);

    console.log('Clicking on the button for login')
    await page.click("#main > div.main__content > div > div.home-page--contents-inner-wrapper > div.sc-hzDkRC.igCZeY > div > div.main-banner--content.main-banner--content-signed-out > div > div.main-banner--sign-in-wrapper.sc-iAyFgw.kajHWQ > div.signin-register > div.signin-register--signin > div.signin-register--signin-button > a");
    await page.waitForSelector('#email');

    console.log('Logging in...');
    await page.type('#email', 'zpelechova@gmail.com', { delay: 100 });
    await page.waitFor(500);
    await page.type('#password', '5Ds5.7TWWMAQ*uq', { delay: 100 });
    // await page.type('#streetWithNumber', input.street);
    // await page.type('#city', input.city);

    console.log('Submitting login');
    await page.click("#content > div > div.simple-boxed-layout > div > div.simple-boxed-layout--content > section > div > form > div > button");
    await page.waitForSelector("#main > div.main__content > div > div.home-page--contents-inner-wrapper.logged-in > div.sc-hzDkRC.bpYZXu > div.main-banner.main-banner--signed-in > div.main-banner--content.main-banner--content-signed-in > div.main-banner--context-card > section > div > div.context-card-book-a-slot__top > div.action > a");
    await page.click("#main > div.main__content > div > div.home-page--contents-inner-wrapper.logged-in > div.sc-hzDkRC.bpYZXu > div.main-banner.main-banner--signed-in > div.main-banner--content.main-banner--content-signed-in > div.main-banner--context-card > section > div > div.context-card-book-a-slot__top > div.action > a");
    await page.waitFor(50000);
    //     console.log('Clicking on Pokracovat v nakupu2...');
    
    
    // const ifDeliver = await page.evaluate(() => document.querySelector(".AddressModal_wrapper h3").innerText);
    // console.log(ifDeliver);

    // if (ifDeliver === ('Na vaši adresu rozvážíme')) {
    //     console.log('dobry!');
    //     console.log('Clicking on Pokracovat v nakupu...');
    //     await page.click("#__next > div > div.Modal__overlay.address_modal > div > div > div.AddressModal_wrapper > div > div > div.ykaars-0.ixwAGl > div:nth-child(1) > button");
    //     console.log('Clicking on Pokracovat v nakupu2...');

    //     await page.waitForSelector("#header button[aria-label='časové sloty pro dopravu']");
    //     console.log('Clicking on Pokracovat v nakupu3...');

    //     await page.focus("#header button[aria-label='časové sloty pro dopravu']");
    //     await page.waitFor(500);

    //     await page.click("#header button[aria-label='časové sloty pro dopravu']");
    //     console.log('Clicking on Pokracovat v nakupu4...');

    //     await page.waitForSelector("#__next > div > div.Modal__overlay.delivery_modal > div > div > div:nth-child(1) > div.sc-11hd33x-0.gXmsGr > div.sc-11hd33x-8.ksnQCP > div > div");
    //     console.log('Clicking on Pokracovat v nakupu5...');

    //     const check = await page.evaluate(() => document.querySelector("#__next > div > div.Modal__overlay.delivery_modal > div > div > div:nth-child(1) > div.sc-11hd33x-0.gXmsGr > div.sc-11hd33x-8.ksnQCP > div > div").innerText);
    //     console.log(check);

    //     const earliest = await page.evaluate(() => document.querySelector("#header button[aria-label='časové sloty pro dopravu']").innerText);
    //     console.log(earliest);
    // }
});