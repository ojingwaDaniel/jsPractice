<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9af5fcb80ae724b08e5e537fa594df759c5a67cd
'use strict'
// DISRUTURING AN ARRAY 
const youngStar = ['Dembele','pedri','Nico','fati','Arajuo','Gavi']
const [Araj , Gavi] = youngStar
let starboy = String( youngStar.slice(-3))
console.log( `the most consistent bsrcelona players are ${starboy}`);
let consistent = youngStar.slice(-3)
consistent.forEach(player =>{
 console.log(`The most consistent barcelona players is ${player}`)
})
console.log(consistent);
// DISRUTURING AN OBJECT
let veteran = {
    'playersName':'Busquet',
    'Potential Replacement': 'Nico',
    'position': 'DMF',
}
let {playersName,position} = veteran
console.log(`Barcelona most important verteran is ${playersName} and he is plays as a ${position}`)
// DELETING AN OBJECT PROPERTIES
let bigClubs = {
    '1st': 'Real Madrid ',
    '2nd': 'Barcelona ',
    '3rd' : 'Bayern',
    '4rd' : 'Liverpool',
    '5th' : 'Man City'

}
delete bigClubs['5th']
console.log(bigClubs)
<<<<<<< HEAD

=======
// CREATING A RANDOM NUMBER 
// Randomly choosing jersies number
let number = Math.random() * 12
let roundNumber = Math.floor(number)
console.log(roundNumber);

=======
'use strict'
// DISRUTURING AN ARRAY 
const youngStar = ['Dembele','pedri','Nico','fati','Arajuo','Gavi']
const [Araj , Gavi] = youngStar
let starboy = String( youngStar.slice(-3))
console.log( `the most consistent bsrcelona players are ${starboy}`);
let consistent = youngStar.slice(-3)
consistent.forEach(player =>{
 console.log(`The most consistent barcelona players is ${player}`)
})
console.log(consistent);
// DISRUTURING AN OBJECT
let veteran = {
    'playersName':'Busquet',
    'Potential Replacement': 'Nico',
    'position': 'DMF',
}
let {playersName,position} = veteran
console.log(`Barcelona most important verteran is ${playersName} and he is plays as a ${position}`)
// DELETING AN OBJECT PROPERTIES
let bigClubs = {
    '1st': 'Real Madrid ',
    '2nd': 'Barcelona ',
    '3rd' : 'Bayern',
    '4rd' : 'Liverpool',
    '5th' : 'Man City'

}
delete bigClubs['5th']
console.log(bigClubs)

>>>>>>> 57fd8e52f1816b2dbea884b4249b07eaf53a148e
>>>>>>> 9af5fcb80ae724b08e5e537fa594df759c5a67cd
