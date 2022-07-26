// PROGRAMME TO KNOW IF YOU ARE OLD ENOUGH TO VOTE
let votersAge= 34;
if (votersAge >= 18) {
    console.log('Congratulations you are qualified to vote, Make good use of your voting right');
}
else{
    console.log('Ouch! Sorry you are not qualified to vote because you are less than 18');
}
//        MY PROFILE
let profile = {
    'First-name': 'Daniel',
    'Surname' : 'Ojingwa',
    'Hobby' : ['Football','Music','Travelling','Driving','Coding'],
    'Fav-Food': 'porridge yam'
}
//       FOR LOOP 
let  barcaPlayers= ['Ter-stergen','Dest','Pique','Arajuo','Sergio Busquet','Gavi','Dembele','Pedri','lewandoski','Ansu Fati','Rapinha']
for(let i = 0;i > barcaPlayers.length; i++){
    console.log(i,barcaPlayers[i])
}
let barcaYoungStar = document.querySelector('.container')
    //FUNCTIONS
function mutiply(digit1,digit2){
    let answer = digit1 * digit2
    return answer
}
let finalAnswer =  mutiply(2,2)
                    //FUNCTION : REST
function addingNumbers(clientName,...numbers){
    let answer = 1

   for(digits in numbers){
    answer = answer * numbers[digits]
   }
   return `${clientName} the total of your multiplication is ${answer}`
}   
let total = addingNumbers('Mr Garuba Clinton',234,456,678,368)
console.log(total)
// ADDING FUNCTIONS IN OBJECTS
let customerName = {
    'name': 'Daniel',
    'age': 32,
    'Address':'1 Odefe Garuba Street',
     favourite(favouriteWords = 'LETS KEEP IMPROVING'){
        console.log(`${this.name} favourite quote is ${favouriteWords}`);
     }
}
console.log(customerName.favourite('YOU CAN DO IT'));
//  OR 
let customer = {
    'name': 'Chidebere',
    'age': 40,
    'Address':'1 Odefe Garuba Street',
    'favWord':function(quote = 'NEVER GIVE UP') {
        console.log(`${this.name} favourite quote is ${quote}`);
    }
    
   }
   console.log(customer.favWord('WHEN DUTY CALLS COMMITMENT IS REQUIRED'))
   // HOW TO MAKE YOUR JAVASCRIPT FROM LAGGING IN A PAGE...> HEAD TO HTML
//    window.onbeforeunload = function(){
//     console.log('Posting a picture')
//     return 'are you sure you want to refresh this page'
//    }
//    window.Beforeunload = function(){
//     console.log('Posting a picture')
//     alert( 'are you sure you want to refresh this page')
//    }
// //        SCOOPING JAVASCRIPT involving javascript
let digits = 65;
if(digits ===65){
    var prints = 'if you see any digit it must be 65'
}else{
    console.log('oga enter 65 digits')
}
console.log(prints)
//  HOISIING IN JAVASCRIPT
console.log('will barcelona actually sign',player2)
var player2 = 'kounde'
console.log('barcelona won the race to sign',player2)
// JAVASCRIPT CLOSURE
// because  the variable secondFavClub is a closure of the function fan() it cant be accessed outside the closure
let club = 'Barcelona'
function fan(){
    console.log(`i was born with my blood been blue and red , guess which club is that , which club if not ${club}`)
    let secondFavClub = 'Man City'
}
fan()
console.log(secondFavClub)
//CALLBACK FUNCTIONS
console.log('waiting for some seconds')
setTimeout(function(){
    console.log('print out this stuff later')
},3500)
// STRICT MODE
'use strict'
let x = 'find the unkown number in the equation'
z = 'dont bother finding this one '
// SET INTERVAL
let count = 0
let timeInterval =setInterval(function(){
    console.log('LETS KEEP IMPROVING')
    count++
    if (count ===5) {
        clearInterval(timeInterval)
        console.log('LEARNING NEVER ENDS')
    }
},2000)
// WHILE LOOP
let clientName= prompt('whats your name')
console.log(`${clientName} Welcome to my Website have a great time`);
while(true){
    let password = prompt('input your password ')
    if(password==="dannyboy"){
        break
    }else{
        console.log('wrong password try again later')
    }
}
