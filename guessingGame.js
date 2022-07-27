while(true){
    let guessedNumber = prompt('Guess a number from 1-10')
    guessedNumber = Number(guessedNumber)
    let randomNumber = Math.ceil(Math.random() * 10 )
    if (guessedNumber === randomNumber) {
        console.log(`Congratulation your guess of ${guessedNumber} match our random number of ${randomNumber}`)
        break;
        
    } else {
        console.log(`sorry you guessed ${guessedNumber} but the correct number was ${randomNumber}`)
        
    }
}