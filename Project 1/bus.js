async function fetchDataAsync(url) {
    try {

        const response = await fetch(url, {
            method: 'GET',
            // mode: 'cors',
            headers: {
              // 'Content-Type': 'application/json',
              'AccountKey': 'c5SCu1KNQ4OsnpfU+wxoyg=='
              // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
            }
          });

        console.log(response)

        // const data = await response.json()
        // console.log(data)

    } catch(ex) {
        console.log(ex)
    }
}
// fetchDataAsync("https://api.opendota.com/api/teams")
// fetchDataAsync("http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")
// fetchDataAsync("https://thingproxy.freeboard.io/fetch/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")
fetchDataAsync("http://crossorigin.me/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")