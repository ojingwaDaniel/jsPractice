while (true) {
    let guessedNumber = prompt('Guess a number from 1-10')
    guessedNumber = Number(guessedNumber)
    let randomNumber = Math.floor(Math.random() * 10)
    if (guessedNumber === randomNumber) {
        console.log(`congratulation your guessed number ${guessedNumber} matched our random  choosing number ${randomNumber}`)
        break
        
    } else {
        console.log(`sorry your guessed number ${guessedNumber} does not match  our random choosing number ${randomNumber}`)
        
    }
    
}