const Apify = require('apify');
Apify.main(async () => {
    // const input = await Apify.getValue('INPUT');
    console.log('Launching Puppeteer...');
    const browser = await Apify.launchPuppeteer();

    console.log('Going to rohlik.cz ...');
    const page = await browser.newPage();
    await page.goto('https://www.rohlik.cz/');

    console.log('Opening modal...');
    await page.focus('#header > div.hlaif7-1.khfnUV > div.hlaif7-2.iSsjvs > button > strong');
    await page.waitFor(500);
    
    console.log('Clicking on the opening button')
    

    await Promise.all([
        page.click('#header > div.hlaif7-1.khfnUV > div.hlaif7-2.iSsjvs > button > strong'),
        page.waitForSelector('#streetWithNumber'),
    ]);
    
    // await page.click('#header > div.hlaif7-1.khfnUV > div.hlaif7-2.iSsjvs > button > strong');
    // await page.waitForNavigation();

    console.log('Getting address input...');
    await page.type('#streetWithNumber', 'Jindřicha Plachty 15');
    await page.type('#city', 'Praha 5');

    // await page.type('#streetWithNumber', input.street);
    // await page.type('#city', input.city);
    const yourButton = [document.querySelectorAll('button')].find(button => button.innerText === 'zadejte adresu');
    yourButton.click();

    console.log('Submit search form');
    await Promise.all([page.waitForNavigation(), page.click('#__next > div > div.Modal__overlay.address_modal > div > div > div.AddressModal_wrapper > div > div.cxuagm-0.cxuagm-1.gJAZiS > form > button[type="submit"]')]);

    const ifDeliver = $('#__next > div > div.Modal__overlay.address_modal > div > div > div.AddressModal_wrapper > div > div > div:nth-child(1) > h3').text();
    console.log(ifDeliver);

    // await page.click('#__next > div > div.Modal__overlay.address_modal > div > div > div.AddressModal_wrapper > div > div > div.ykaars-0.ixwAGl > div:nth-child(1) > button');


    // console.log('Signed ...');

    // //go to url subscriptions
    // const urlSubscription = 'https://toggl.com/app/subscription';
    // await page.goto(urlSubscription);
    // await page.waitForNavigation();
    // const currentUrl = page.url();

    // //find id in url
    // const regex = /[0-9]+/g;
    // const found = currentUrl.match(regex);

    // //construct invoice url with id
    // const invoiceUrl = 'https://toggl.com/app/subscription/'+ found +'/invoices-and-payments';
    // //goto url invoices
    // await page.goto(invoiceUrl);

    // const lastInvoice = '.css-1xdhyk6.e22ygp00 > div > a:nth-child(3)'
    // await page.waitForSelector(lastInvoice);

    // console.log('Opening invoice ...');
    
    // // get url to last invoice and name the file
    // const linkLastInvoice = await page.$eval(lastInvoice,el=>el.href);
    // const invoiceName = '.css-1xdhyk6.e22ygp00 > div > a:nth-child(3) > div > div.css-8a0s72.e22ygp01'
    // const texpromise = page.$eval(invoiceName, el => el.textContent);
    // const text = await texpromise;
    // const filename = text.replace(/\s+/g,'_').replace(/,/g,'')+'_toggl.pdf';
    
    // // get request     
    // const simpleRequest = require('request-promise-native');
    
    // async function getPdfBuffer(url, cookies)
    // {
    //     //make cookie string - page.cookies() return dictionary
    //     let cookieStr = '';
    //     for(var i = 0; i < cookies.length; i+=1)
    //     {
    //             const cookie = cookies[i];
    //             cookieStr += cookie.name + "=" + cookie.value + ";";
    //     }
  
    //     const options = 
    //     {
    //         url: url,
    //         method: 'GET',
    //         timeout: 120 * 1000,
    //         // set to `null`, if you expect binary data.
    //         encoding: null, 
    //         //set cookies to header
    //         headers: { "cookie": cookieStr }, 
    //     };

    //     const buffer = await simpleRequest.get(options);
    //     return buffer;
    // }

    // const cookies = await page.cookies();
    // const pdfBuffer  = await getPdfBuffer(linkLastInvoice, cookies);

    // // pdf to KVS
    // console.log('Saving invoice ...');
    // await Apify.setValue(filename, pdfBuffer, { contentType: 'application/pdf' });
    // const urlForKVS = `https://api.apify.com/v2/key-value-stores/${Apify.getEnv().defaultKeyValueStoreId}/records/${filename}`
    // await Apify.setValue('OUTPUT', { url: `https://api.apify.com/v2/key-value-stores/${Apify.getEnv().defaultKeyValueStoreId}/records/${filename}` });
         
    // console.log('Invoice was downloaded.');
    // console.log('Invoice can be found on the following url: ' + urlForKVS);

    // // upload to dropbox optional
    // const dropboxToken = input.dropboxToken || process.env.dropboxToken

    // if (dropboxToken) {
    //     const base64str = pdfBuffer.toString('base64');
    //     //filenameDropbox = '/apps/actorDr/'+filename;
    //     const date = new Date();
    //     const month = ("0" + (date.getMonth() + 1)).slice(-2);
    //     const year = date.getFullYear();
    //     const dropboxPath = year + '_' + month;
        
    //     let filenameDropbox = null

    //     if (input.pathToDropbox !== undefined){
    //         filenameDropbox = input.pathToDropbox + '/' + filename;
    //     } else {
    //         filenameDropbox = '/' + dropboxPath + '/' + filename;
    //     }
       
    //     const dropboxActorInput = {
    //         "accessToken": dropboxToken,       // dropbox access token
    //         "filePath": filenameDropbox,      // path on dropbox to save the file to
    //         "fileBase64": base64str,         // contents of the file as base64   
    //     }
        
    //     await Apify.call('petr_cermak/dropbox-upload', dropboxActorInput);
        
    //     console.log('Done, invoice was uploaded to Dropbox!');
    // }

    // const emailTo = input.emailTo;
    // const attachmentPdf = pdfBuffer.toString('base64');
    
    // if (emailTo) {  
    //     const emailText = "Invoice (" + filename + ") was downloaded from Toggl.com and uploaded to Dropbox (if requested). URL to key-value store: " + urlForKVS + ".";

    //     const emailActorInput = {
    //         "to": emailTo,
    //         "subject": "Toggl invoice was downloaded",
    //         "text": emailText,
    //         "attachments": [{
    //             filename: filename,
    //             data: attachmentPdf
    //         }]
    //     }

    //     await Apify.call('apify/send-mail', emailActorInput)

    //     console.log('Notification email sent.');
    // }


  });
