// Code your solutions in this file
let array =[]
function writeCards(people, event) {
    for (let i=0; i<people.length; i++) {
    array.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
}
return array
}


function countDown (num) {
    for (let i=0; i<=num; num--){
        console.log(num)
    }
}