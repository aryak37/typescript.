/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const studentname: string = "Alya Putri";
const GPA: number = 3.89;
const familyincome: number = 4200000;
const competitioncount: number = 4;
const hasdiciplinaryrecord: boolean = false;
const documentscomplete: boolean = true;

const totalbudget: number = 50000000;

const isGpaValid = GPA >= 3.75;
const isIncomeValid = familyincome < 5000000;
const isCompetitionsValid = competitioncount >= 3;
const isCleanRecord = !hasdiciplinaryrecord;
const isDocsValid = documentscomplete === true;

const isAccepted = isGpaValid && isIncomeValid && isCompetitionsValid && isCleanRecord && isDocsValid;

const scholarship = isAccepted ? 12000000 : 0;

const remainingbudget = totalbudget - scholarship

console.log(`Student Name: ${studentname}`);
console.log(`Status: ${isAccepted ? "ACCEPTED" : "NOT ACCEPTED"}`);
console.log(`Scholarship Amount Awarded: Rp${scholarship.toLocaleString()}`);
console.log(`Remaining University Budget: Rp${remainingbudget.toLocaleString()}`);