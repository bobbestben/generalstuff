async function fetchTeamData(url) {
    try {

        //Fetching Team Information
        const response = await fetch(url)
        const data = await response.json()
        const selectedTeam = data[Math.floor(Math.random() * 30)]
        const teamId = selectedTeam['team_id']
        const playTime = selectedTeam['last_match_time']
        const teamName = selectedTeam.name
        const teamLogoUrl = selectedTeam['logo_url']
        console.log('data',data)
        console.log('teamId',teamId)
        console.log('Name',teamName)
        console.log('lastplayed',playTime)
        console.log('logo-url',teamLogoUrl)

        //Getting Selected Team Most Played Heroes
        //URL for this info is on another page, generating my new URL
        let innerUrl = "https://api.opendota.com/api/teams/"
        innerUrl = innerUrl + teamId + '/heroes'
        console.log('innerUrl',innerUrl)
        const response2 = await fetch(innerUrl)
        const data2 = await response2.json()
        console.log(data2)
        const mostPlayedHeroes1 = data2[0]['localized_name']
        const mostPlayedHeroes2 = data2[1]['localized_name']
        const mostPlayedHeroes3 = data2[2]['localized_name']
        const mostPlayedHeroes1_ID = data2[0]['hero_id']
        const mostPlayedHeroes2_ID = data2[1]['hero_id']
        const mostPlayedHeroes3_ID = data2[2]['hero_id']
        console.log('team-heroes-data',mostPlayedHeroes1,mostPlayedHeroes2,mostPlayedHeroes3)

        //Updating HTML page with above filtered data
        const team = document.querySelector('.team-name')
        team.innerText = ("Team " + teamName)

        const lastPlayed = document.querySelector('.last-played')
        lastPlayed.innerText = ("Last match played on " + playTime)

        const teamLogo = document.querySelector('.random-team')
        teamLogo.setAttribute('src',teamLogoUrl)

        const strongHeroes = document.querySelector('.strong-heroes')
        strongHeroes.innerText = (`Most played heroes(ID) are ${mostPlayedHeroes1}(${mostPlayedHeroes1_ID}), ${mostPlayedHeroes2}(${mostPlayedHeroes2_ID}), ${mostPlayedHeroes3}(${mostPlayedHeroes3_ID})`)

        //Search function - Enter Hero ID
        const searchBtn = document.querySelector('.search-bar button')
        const searchInput = document.querySelector('.search-bar input')
        const searchOutput = document.querySelector('.search-output')
        
        searchBtn.onclick = () => {
            console.log(searchInput.value)
            console.log('button is pressed')
            let searchUrl = "https://api.opendota.com/api/heroes/"
            searchUrl = searchUrl + searchInput.value + "/matchups"
            console.log(searchUrl)
            fetch(searchUrl)
                .then(response => {
                    return response.json()
                })
                .then(jsonData => {
                    console.log(jsonData)
                    searchOutput.innerText = `Hero is weak against Hero ID ${jsonData[0]['hero_id']}!`
                })
                .catch(err => {
                    console.log(err)
                })

        }


        // const jsonStr = JSON.stringify(data.abilities)
        // console.log(jsonStr)

        // const jsonObj = JSON.parse(jsonStr)
        // console.log(jsonObj)
    } catch(ex) {
        console.log(ex)
    }
}
fetchTeamData("https://api.opendota.com/api/teams")