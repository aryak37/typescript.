/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
  studentId: string;
  studentName: string;
  gradeLevel: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  totalLearningHours: number;
  registrationDate: Date;
  isPaymentCompleted: boolean;
};

const registrations: Registration[] = [
  {
    studentId: "STU-001",
    studentName: "Alice Johnson",
    gradeLevel: "10th Grade",
    courseId: "CS-101",
    courseTitle: "Introduction to Programming",
    instructorName: "Dr. Smith",
    totalLearningHours: 40,
    registrationDate: new Date("2024-01-15"),
    isPaymentCompleted: true,
  },
  {
    studentId: "STU-002",
    studentName: "Bob Williams",
    gradeLevel: "11th Grade",
    courseId: "CS-102",
    courseTitle: "Data Structures and Algorithms",
    instructorName: "Prof. Johnson",
    totalLearningHours: 60,
    registrationDate: new Date("2024-02-10"),
    isPaymentCompleted: false,
  },
];

console.log(registrations);