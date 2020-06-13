new Vue({
  el: '#app',
  methods: {
    display() {
      const encodeURIParam = (stringParam) => {
        return encodeURI(stringParam.replace(/\s/g, '+'));
      };
      const streetElm = document.getElementById('street');
      const street = encodeURIParam(streetElm.value);
      const cityElm = document.getElementById('city');
      const city = encodeURIParam(cityElm.value);
      const zipElm = document.getElementById('zip');
      const zip = encodeURIParam(zipElm.value);
      const targetUrl = `https://www.kosik.cz/api/web/transport/windows?street=${street}&city=${city}&zip=${zip}`;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const displayElm = document.getElementById('result')
      fetch(proxyUrl + targetUrl)
        .then((resp) => resp.json())
        .then((json) => displayElm.textContent = `Nejdříve vám Košík přiveze nákup ${json.earliest_timeslot}.`);
 
    }
  }
});