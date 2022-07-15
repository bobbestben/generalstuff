
let myUrl = "https://jsonmock.hackerrank.com/api/countries?name=Puerto+Rico"

fetch(myUrl)
    .then(response => {
        // return response
        return response.json()
    })
    .then(jsonData => {
        countryData = jsonData
        index = countryData['data'][0]['callingCodes'].length
        console.log(countryData['data'][0]['callingCodes'][index-1])
    })
    .catch(err => {
        console.log(err)
    })