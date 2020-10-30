//import {testFunction} from "./testFunction.js"

const playerData = [
    {
        playerName: 'Shaeffer <br> Gordon-Carroll',
        profileImage: "./img/shaeff_profile.jpg",
        teamName: 'Chicago Mission',
        ageGroup: '12U',
        birthYear: '2008',
        playerPosition: 'Left Wing',
        playerNumber: 77,
        seasonYear: '2020 - 2021',
        gpLabel: 'GP',
        gamesPlayed: 7,
        goalsLabel: 'G',
        goals: 3,
        assistsLabel: 'A',
        assists: 5,
        pointsLabel: 'Pts',
        points: 8,
        plusMinusLabel: '+/-',
        plusMinus: 4,
    }
]

const playerCard = document.querySelector('.Card');

function cardMaker(dataObj){
//assign HTML element to const
    //console.log(testFunction);

    const playerCard = document.createElement('div');
    const playerInfo = document.createElement('div');
    const playerName = document.createElement('h1');
    const profileImage = document.createElement('div');
    const imgSrc = document.createElement('img');
    const teamName = document.createElement('h2');
    const playerPosition = document.createElement('p');

//assign value from object data to const
    playerName.innerHTML = dataObj.playerName;
    imgSrc.setAttribute('src', dataObj.profileImage);
    imgSrc.setAttribute('alt', dataObj.playerName);
    teamName.textContent = `${dataObj.teamName} ${dataObj.ageGroup}`;
    playerPosition.textContent = `${dataObj.playerPosition} - ${dataObj.playerNumber}`;

//append to playerCard div
    profileImage.appendChild(imgSrc);
    playerCard.appendChild(profileImage); 
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(teamName);
    playerInfo.appendChild(playerPosition);
    playerCard.appendChild(playerInfo);

//add class names
    profileImage.classList.add('playerImage');
    playerCard.classList.add('playerCard');
    playerInfo.classList.add('playerInfo');

    return playerCard;
}

const playerCardElement = playerData.map((element) => {
    return cardMaker(element);
  })
  console.log(playerCardElement);
  playerCardElement.forEach(arrElement => {
    playerCard.appendChild(arrElement);
  });

const sectionStats = document.querySelector('.Stats');

function statMaker(dataObj){
    //playerStats div
    const playerStats = document.createElement('div');
    playerStats.classList.add = 'playerStats';
    //totalStat gamesPlayed div
    const gamesPlayed = document.createElement('div');
    gamesPlayed.classList.add ='totalStat gamesPlayed';    
    //Games Played h3
    const gpH3 = document.createElement('h3');
    gpH3.textContent = `${dataObj.gpLabel}`;
    //Games Played <p>
    const gpPElement = document.createElement('p');
    gpPElement.textContent = `${dataObj.gamesPlayed}`;

    //totalStat totalPoints div
    const totalPoints = document.createElement('div');
    totalPoints.classList.add ='totalStat totalPoints'; 
    //Total Points
    const totalPointsH3 = document.createElement('h3');
    totalPointsH3.textContent = `${dataObj.pointsLabel}`;
    //Points <p>
    const totalPointsP = document.createElement('p');
    totalPointsP.textContent = `${dataObj.points}`;

    //totalStat totalGoals div
    const totalGoals = document.createElement('div');
    totalGoals.classList.add ='totalStat totalGoals'; 
    //Total Points
    const totalGoalsH3 = document.createElement('h3');
    totalGoalsH3.textContent = `${dataObj.goalsLabel}`;
    //Points <p>
    const totalGoalsP = document.createElement('p');
    totalGoalsP.textContent = `${dataObj.goals}`;

    //totalStat totalAssists div
    const totalAssists = document.createElement('div');
    totalAssists.classList.add ='totalStat totalPoints'; 
    //Total Assists
    const totalAssistsH3 = document.createElement('h3');
    totalAssistsH3.textContent = `${dataObj.assistsLabel}`;
    //Points <p>
    const totalAssistsP = document.createElement('p');
    totalAssistsP.textContent = `${dataObj.assists}`;

    //totalStat plusMinus div
    const plusMinus = document.createElement('div');
    plus.classList.add ='totalStat plusMinus'; 
    //Plus minus
    const plusMinusH3 = document.createElement('h3');
    plusMinusH3.textContent = `${dataObj.plusMinusLabel}`;
    //plusMinus <p>
    const plusMinusP = document.createElement('p');
    plusMinusP.textContent = `${dataObj.plusMinus}`;

    //append and nest parent and child elements
    sectionStats.appendChild(playerStats);
    playerStats.appendChild(gamesPlayed);
    gamesPlayed.appendChild(gpPElement);
    gamesPlayed.appendChild(gpH3)
    gamesPlayed.appendChild(gpPElement);

    playerStats.appendChild(totalPoints);
    totalPoints.appendChild(totalPointsH3);
    totalPoints.appendChild(totalPointsP);

    playerStats.appendChild(totalGoals);
    totalGoals.appendChild(totalGoalsH3);
    totalGoals.appendChild(totalGoalsP);

    playerStats.appendChild(totalAssists);
    totalAssists.appendChild(totalAssistsH3);
    totalAssists.appendChild(totalAssistsP);

    playerStats.appendChild(plusMinus);
    plusMinus.appendChild(plusMinusH3);
    plusMinus.appendChild(plusMinusP);

    return playerStats;
}

const playerStatsElement = playerData.map((element) => {
    return statMaker(element);
  })
  console.log(playerStatsElement);
  playerStatsElement.forEach(arrElement => {
    playerStats.appendChild(arrElement);
  });

//<section class='Stats'>
//   <div class='playerStats'>
//     <div class='totalStat gamesPlayed' >
//       <h3>GP</h3>
//       <p>30</p>
//     </div>
//     <div class='totalStat totalPoints'>
//       <h3>Pts</h3>
//       <p>30</p>>
//     </div>
//     <div class='totalStat totalGoals'>
//       <h3>G</h3>
//       <p>30</p>
//     </div>
//     <div class='totalStat totalAssists'>
//       <h3>A</h3>
//       <p>30</p>
//     </div>
//     <div class='totalStat plusMinus'>
//       <h3>+/-</h3>
//       <p>30</p>
//     </div>
//   </div>
//   <div class='moreStats'>
//     <a class='numberVideos' href='#'>64 Videos</a>
//     <a class='masStats' href='#'>more stats</a>
//   </div>  
//</section>