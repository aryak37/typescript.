/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    studentID: string
    fullname: string
    age: number
    status: boolean
};

const students: Student[] = [
    {
        studentID: "0001",
        fullname: "Aryasatya Athallah",
        age: 16,
        status: true
    },
    {
        studentID: "0002",
        fullname: "Prama Javas Aryatama",
        age: 17,
        status: true
    },
    {
        studentID: "0003",
        fullname: "Elang Dimas Syadewa",
        age: 17,
        status: true
    }
];

console.log(students);
