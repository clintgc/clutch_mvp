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

const sectionCard = document.querySelector('.Card');

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
    sectionCard.appendChild(arrElement);
  });

