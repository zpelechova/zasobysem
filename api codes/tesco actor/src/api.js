const Apify = require('apify');
const fetch = require('node-fetch');
const zip = "11000"

Apify.main(async () => {
  const delivery = await fetch("https://itesco.cz/Ajax/", {
    "headers": {
      "accept": "*/*",
      "accept-language": "cs-CZ,cs;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://itesco.cz/sluzby-a-znacky/nakupy/vase-prvni-online-nakupy/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `type=getDotcomAvailable&data%5Bzipcode%5D=${zip}&subtype=get_cities`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  const deliveryJson = await delivery.json();
  const deliveryType = deliveryJson.result;
  console.log(deliveryType);
  if (deliveryType === -1) {
    console.log("Na Vaši adresu dovazime jen balik")
  } else if (deliveryType === 1) {
    console.log("Na Vaši adresu dovazime cely sortiment")
  } else {
    console.log("Neco se pokazilo...")
  }
});
