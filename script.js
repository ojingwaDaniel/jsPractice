// // PROGRAMME TO KNOW IF YOU ARE OLD ENOUGH TO VOTE
// let votersAge= 34;
// if (votersAge >= 18) {
//     console.log('Congratulations you are qualified to vote, Make good use of your voting right');
// }
// else{
//     console.log('Ouch! Sorry you are not qualified to vote because you are less than 18');
// }
// //        MY PROFILE
// let profile = {
//     'First-name': 'Daniel',
//     'Surname' : 'Ojingwa',
//     'Hobby' : ['Football','Music','Travelling','Driving','Coding'],
//     'Fav-Food': 'porridge yam'
// }
// //       FOR LOOP 
// let  barcaPlayers= ['Ter-stergen','Dest','Pique','Arajuo','Sergio Busquet','Gavi','Dembele','Pedri','lewandoski','Ansu Fati','Rapinha']
// for(let i = 0;i > barcaPlayers.length; i++){
//     console.log(i,barcaPlayers[i])
// }
// let barcaYoungStar = document.querySelector('.container')
//     //FUNCTIONS
// function mutiply(digit1,digit2){
//     let answer = digit1 * digit2
//     return answer
// }
// let finalAnswer =  mutiply(2,2)
//                     FUNCTION : REST
function addingNumbers(clientName,...numbers){
    let answer = 1

   for(digits in numbers){
    answer = answer * numbers[digits]
   }
   return `${clientName} the total of your multiplication is ${answer}`
}   
let total = addingNumbers('Mr Garuba Clinton',234,456,678,368)
console.log(total)
