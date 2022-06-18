async function fetchDataAsync(url) {
    try {

        //getting team information
        const response = await fetch(url)
        const data = await response.json()
        const selectedTeam = await data[Math.floor(Math.random() * 30)]
        const teamId = await selectedTeam['team_id']
        const playTime = await selectedTeam['last_match_time']
        const teamName = await selectedTeam.name
        const teamLogoUrl = await selectedTeam['logo_url']
        console.log('teamId',teamId)
        console.log('Name',teamName)
        console.log('lastplayed',playTime)
        console.log('logo-url',teamLogoUrl)

        //getting team strong heroes
        //need to generate my inner url
        let innerUrl = "https://api.opendota.com/api/teams/"
        innerUrl = innerUrl + teamId + '/heroes'
        console.log('innerUrl',innerUrl)
        const response2 = await fetch(innerUrl)
        const data2 = await response2.json()
        const mostPlayedHeroes1 = await data2[0]['localized_name']
        const mostPlayedHeroes2 = await data2[1]['localized_name']
        const mostPlayedHeroes3 = await data2[2]['localized_name']
        console.log('team-heroes-data',mostPlayedHeroes1,mostPlayedHeroes2,mostPlayedHeroes3)



        const team = document.querySelector('.team-name')
        team.innerText = ("Top 1 Team is " + teamName)
        const lastPlayed = document.querySelector('.last-played')
        lastPlayed.innerText = ("Last match played on " + playTime)
        const teamLogo = document.querySelector('.random-team')
        teamLogo.setAttribute('src',teamLogoUrl)
        const strongHeroes = document.querySelector('.strong-heroes')
        strongHeroes.innerText = ("Most played heroes are " + mostPlayedHeroes1 + mostPlayedHeroes2 + mostPlayedHeroes3)

        // const jsonStr = JSON.stringify(data.abilities)
        // console.log(jsonStr)

        // const jsonObj = JSON.parse(jsonStr)
        // console.log(jsonObj)
    } catch(ex) {
        console.log(ex)
    }
}
fetchDataAsync("https://api.opendota.com/api/teams")