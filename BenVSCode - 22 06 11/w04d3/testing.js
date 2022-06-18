//Event bubbling
//click on child, parent also receives a click

//Event delegation
//how to code in parent/child elements

//Rest API (Application Programming Interface)
//REpresentational State Transfer
//rest is an architectural style

//https://git.generalassemb.ly/SG-SEIF-9/Course-Materials/blob/main/unit_1/w04d3/3_rest_api/instructor_notes/2_request.md

//# - in the url
//is the id in html, navigate to that id on the page
//or can do <a></a> and put the ID, when click will link there

//meta data is "data about the data"
//eg. data is image
//meta data is the location, taken by who etc.

//Header holds meta data


//To fetch data, if >100kb size,
//using get cannot use the body (other verbs can)
//so data is stored in the url
//url got max data limit, so sometime use POST

//Login - create a new session
//Last time ppl use POST
//create a new login session

//difference between GET and POST
//is where you store the data, eg.login request?

//GET
//inspect -> network
//Header -> request url & method
//request(get) - URL
//response - is the HTML code

//Status codes
// 200 - everything pass, everything is ok

//postman.com
//go download


async function fetchDataAsync(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        // const jsonStr = JSON.stringify(data.abilities)
        // console.log(jsonStr)

        // const jsonObj = JSON.parse(jsonStr)
        // console.log(jsonObj)
    } catch(ex) {
        console.log(ex)
    }
}


//Setting up a server
//to bypass CORS error issue
//as API request can only be done from certain area
//if call from a file -> will have this CORS area
//in console
//npx http-server .
//then paste in web browser 
//localhost:8080/index.html
