let student1 = {fName: 'Sue', lName: 'Smith', gpa: 2.9, playsVolleyball: false}

console.log('I know ' + student1.fName, student1.lName)

let student2 = {fName: 'Bob', lName: 'Hurtado', gpa: 3.9, playsVolleyball: false}

if (student1.playsVolleyball) {
    console.log(student1.fName + ' plays VB')
} else {
    console.log(student1.fName + ' doesn\'t play VB')
}

let students = [student1]

students.push(student2)

students.push({fName: 'Zaphod', lName: 'Beeblebrox', gpa: 4.2, playsVolleyball: true})

student1.fName = 'Stew'
student2.fname = 'Blob'

students[students.length-1].gpa += 0.5

console.table(students)

