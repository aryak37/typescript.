/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let aStudents = 0
let bStudents = 0
let cStudents = 0
let dStudents = 0

let highestScore = students[0].score
let lowestScore = students[0].score
let totalScore = 0

for (const student of students) {
    const score = student.score
    totalScore += score
    if (score > highestScore) {
        highestScore = score
    }
    if (score < lowestScore) {
        lowestScore = score
    }
    if (score >= 90) {
        aStudents++
    }
    else if (score >= 80) {
        bStudents++
    }
    else if (score >= 70) {
        cStudents++
    }
    else {
        dStudents++
    }
}

const averageScore = totalScore / students.length

console.log(`A Students: ${aStudents}`)
console.log(`B Students: ${bStudents}`)
console.log(`C Students: ${cStudents}`)
console.log(`D Students: ${dStudents}`)
console.log(`Highest Score: ${highestScore}`)
console.log(`Lowest Score: ${lowestScore}`)
console.log(`Average Score: ${averageScore}`)