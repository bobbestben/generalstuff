const myObj = {
    "ServiceNo": "130",
    "Operator": "SBST",
    "NextBus": {
        "OriginCode": "03239",
        "DestinationCode": "54009",
        "EstimatedArrival": "2022-06-25T18:46:34+08:00",
        "Latitude": "1.2954491666666668",
        "Longitude": "103.85121483333333",
        "VisitNumber": "1",
        "Load": "SEA",
        "Feature": "WAB",
        "Type": "SD"
    },
    "NextBus2": {
        "OriginCode": "03239",
        "DestinationCode": "54009",
        "EstimatedArrival": "2022-06-25T18:52:43+08:00",
        "Latitude": "1.2821776666666667",
        "Longitude": "103.85115766666667",
        "VisitNumber": "1",
        "Load": "SEA",
        "Feature": "WAB",
        "Type": "SD"
    },
    "NextBus3": {
        "OriginCode": "03239",
        "DestinationCode": "54009",
        "EstimatedArrival": "2022-06-25T18:59:00+08:00",
        "Latitude": "1.2739843333333334",
        "Longitude": "103.8472015",
        "VisitNumber": "1",
        "Load": "SEA",
        "Feature": "WAB",
        "Type": "DD"
    }
}

console.log(Object.keys(myObj)[3])