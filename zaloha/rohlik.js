const targetUrl = "https://www.rohlik.cz/services/frontend-service/timeslots-api/0?userId=&addressId=1976007";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

fetch(proxyUrl + targetUrl)
.then((resp) => resp.json())
.then((json) => console.log(json));