//Get temporary access to cors here first:
//https://cors-anywhere.herokuapp.com/corsdemo

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

async function fetchDataAsync(url) {
    try {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'AccountKey': 'c5SCu1KNQ4OsnpfU+wxoyg=='
            }
          });

        console.log(response)

        const data = await response.json()
        console.log(data)

    } catch(ex) {
        console.log(ex)
    }
}
// fetchDataAsync("https://api.opendota.com/api/teams")
// fetchDataAsync("http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")
// fetchDataAsync("https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")