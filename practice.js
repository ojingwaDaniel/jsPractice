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
//using TRY and catch 
let digits = 22
try {
    digits = digits.toLowerCase()
    
    
} catch (error) {
    console.warn('ERROR OCCURED:',error)
    
}finally{
    console.log(digits)

}
// this.
function testing(){
    if (this.num == undefined) {
        this.num = 1
        
    } else {
        this.num++
        
    }
    console.log(`the number this time around is ${this.num}`)

}
testing()
testing()
testing()
// APPLYING IT IN OBJECTS
let listedItem = {
    'phone': 'iphone',
    'senators': 5,
    'earpod': "apple product",
    mostImportant(){
        console.log(`the most important item here is the ${this.phone}`)
    }
}
 
 
listedItem.mostImportant()
/////DIFFERENT METHOD OF WRITING FUNCTIONS
 function print(name){
    console.log(`hello ${name} how are you doing`)
 }
 let hello = function(person){
    console.log(`hello ${person}  whats up`)
 }
 let hello2 = (person2)=>{
    console.log(`hello ${person2} how you dey`)
 }
 let hello3 = (person3)=> console.log(`hello ${person3}  how your side`)
 print('Daniel')
 hello('Todimu')
 hello2('Samuel')
hello3('Chidebere')
// // JAVASCRIPT CLASSES
class testingMyNewClass{
    favFood(food){
        this.food = food
        if (this.food == undefined) {
            this.food = 'porridge yam'
        }

    }
    individualName(name){
        console.log(`${name} favourite food is ${this.food}`)

    }
    

}
let classes = new testingMyNewClass
classes.favFood()
classes.individualName('Daniel')
//// JAVASRIPT CLASS CONSTRUCTOR
class bestPlayerInTheWorld{
    constructor(player,player2){
        this.player = player
        this.player2 = player2 
    }
    coaches(){
        console.log(`Most coaches mostly say that the best player in the world are ${this.player} and ${this.player2}`)
    }
    journalist(){
        console.log(` Most journalist round the world believe that the best player in the world are ${this.player}and ${this.player2}`)
    }
}
let bestplayer = new bestPlayerInTheWorld('Messi', 'ronaldo')
bestplayer.coaches()
bestplayer.journalist()


