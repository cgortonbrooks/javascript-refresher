// console.log('Hello world.')

// let x = 'How are you?'
// console.log(x)

// let greeting = 'Hello'
let fName = 'Job'
// console.log(greeting, fName + '!')

let age = 13
console.log('You are ' + age)

console.log('In ten years you\'ll be ' + (age + 10))

if (fName === 'Bob') {
    console.log('I knew it was you ' + fName)
} else {
    console.log('Hey ' + fName + ', you\'re not Bob!')
}

let iAmWearingABelt = false
let iAmWearingGlasses = false

if (iAmWearingABelt && iAmWearingGlasses) {
    console.log('Probably not Mr. Gorton')
}

if (iAmWearingABelt && !iAmWearingGlasses) {
    console.log('Probably is Mr. Gorton')
}

if (iAmWearingABelt || iAmWearingGlasses) {
    console.log('Probably just some dude')
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}

