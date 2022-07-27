let numbers= [10,20,20,20]
let addingDigits = 0
for(x = 0 ; x < numbers.length; x++){
    addingDigits += numbers[x]
}
console.log(addingDigits)
// USING forEach function no need to add numbers[digits here]
function adding(...numbers){
    var sum = 0
    numbers.forEach(digits=>{
// USING forEach function no need to add numbers[digits here]

        sum = sum + digits

    })
    console.log(sum)
}