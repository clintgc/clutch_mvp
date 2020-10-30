// function elementFactory(el, classes=[], text){
//     const element = document.createElement(el)
//     element.classList.add(...classes)
//     element.innerHtml = text || null
//     return element
// }

const sectionStats = document.querySelector('.Stats');
console.log(sectionStats);
function statMaker(dataObj){
    //playerStats div
    const playerStats = document.createElement('div');
    playerStats.classList.add('playerStats');
    //totalStat gamesPlayed div
    const gamesPlayed = document.createElement('div');
    gamesPlayed.classList.add('totalStat', 'gamesPlayed');    
    //Games Played h3
    const gpH3 = document.createElement('h3');
    gpH3.textContent = `${dataObj.gpLabel}`;
    //Games Played <p>
    const gpPElement = document.createElement('p');
    gpPElement.textContent = `${dataObj.gamesPlayed}`;

    //totalStat totalPoints div
    const totalPoints = document.createElement('div');
    totalPoints.classList.add('totalStat', 'totalPoints'); 

    //Total Points
    const totalPointsH3 = document.createElement('h3');
    totalPointsH3.textContent = `${dataObj.pointsLabel}`;
    //Points <p>
    const totalPointsP = document.createElement('p');
    totalPointsP.textContent = `${dataObj.points}`;

    //totalStat totalGoals div
    const totalGoals = document.createElement('div');
    totalGoals.classList.add('totalStat', 'totalGoals'); 
    //Total Points
    const totalGoalsH3 = document.createElement('h3');
    totalGoalsH3.textContent = `${dataObj.goalsLabel}`;
    //Points <p>
    const totalGoalsP = document.createElement('p');
    totalGoalsP.textContent = `${dataObj.goals}`;

    //totalStat totalAssists div
    const totalAssists = document.createElement('div');
    totalAssists.classList.add('totalStat', 'totalAssists'); 
    //Total Assists
    const totalAssistsH3 = document.createElement('h3');
    totalAssistsH3.textContent = `${dataObj.assistsLabel}`;
    //Points <p>
    const totalAssistsP = document.createElement('p');
    totalAssistsP.textContent = `${dataObj.assists}`;

    //totalStat plusMinus div
    const plusMinus = document.createElement('div');
    plusMinus.classList.add('totalStat', 'plusMinus'); 
    //Plus minus
    const plusMinusH3 = document.createElement('h3');
    plusMinusH3.textContent = `${dataObj.plusMinusLabel}`;
    //plusMinus <p>
    const plusMinusP = document.createElement('p');
    plusMinusP.textContent = `${dataObj.plusMinus}`;

    //append and nest parent and child elements
    //sectionStats.appendChild(playerStats);
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
    sectionStats.appendChild(arrElement);
  });

function moreStatsMaker(){
    //more stats div
    const moreStats = document.createElement('div');
    moreStats.classList.add('moreStats');
    //<a class='numberVideos' href='#'>64 Videos</a>
    const numberVideos = document.createElement('a');
    numberVideos.setAttribute('href', '#');
    numberVideos.textContent = '64'; 
    //more stats
    const moreStatsLink = document.createElement('a');
    moreStatsLink.setAttribute('href', '#');
    moreStatsLink.textContent = 'more stats'; 

    sectionStats.appendChild(moreStats);
    moreStats.appendChild(numberVideos);
    moreStats.appendChild(moreStatsLink);
}
moreStatsMaker();

