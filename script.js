function multiplication(...numbers){
    // numbers = prompt('enter a list of numbers')
    let answer = 1
    numbers.forEach(digits =>{
        answer = answer * Number(digits)

    })
    console.log(answer)

}
multiplication(45,234,567)