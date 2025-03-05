let names = ['Micah', 'Lilly', 'Tyler', 'Ady', 'Olivia']
console.log(names)

names.unshift('Mr. Gorton')
console.log(names)

console.log("The second value is " + names[1])

printAllNames(false)

console.log('--------')

printAllNames(true)

function printAllNames(sort) {
    if (sort) {
        names.sort()
    }
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
}