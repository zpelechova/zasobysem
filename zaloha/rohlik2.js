const Apify = require('apify');
const fetch = require('node-fetch');
const street = "Dlouhá 1";
const city = "Praha 1";
const zip = "11000"


Apify.main(async () => {
  const addressResponse = await fetch("https://www.rohlik.cz/services/frontend-service/delivery-address/check", {
    "headers": {
      "accept": "application/json",
      "accept-language": "cs-CZ,cs;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-origin": "WEB"
    },
    "referrer": "https://www.rohlik.cz/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{\"isGeocodeResult\":false,\"city\":\"${ city }\",\"postalCode\":\"${ zip }\",\"deliveryPointId\":null,\"streetWithNumber\":\"${ street }\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  const addressJson = await addressResponse.json();
  const addressId = addressJson.data.address.id;
  console.log(addressId);

  const deliveryAddress = `https://www.rohlik.cz/services/frontend-service/timeslots-api/0?userId=&addressId=${addressId}`

  const deliveryResponse = await fetch(deliveryAddress);
  const deliveryJson = await deliveryResponse.json();
  console.log(deliveryJson.data.firstDeliveryText.default);
  console.log(deliveryJson.data.firstDeliveryAvailableSinceMessage);

  const slots = deliveryJson.data.availabilityDays[0].slots;
  const firstSlotKey = Object.keys(slots)[0]; 
  const firstSlot = deliveryJson.data.availabilityDays[0].slots[firstSlotKey][0].since;
  console.log(firstSlot);
});