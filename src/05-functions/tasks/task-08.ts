/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Zulfikar",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countSubmittedAssignments(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let count: number = 0;
    for (const submission of submissions) {
        if (submission.submitted) {
            count++;
        }
    }
    return count;
}

function countMissingAssignments(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let count: number = 0;
    for (const submission of submissions) {
        if (!submission.submitted) {
            count++;
        }
    }
    return count;
}

function countPassedStudents(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let count: number = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsRequiringRevision(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let count: number = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score < 75) {
            count++;
        }
    }
    return count;
}

function calculateAverageScore(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let totalScore: number = 0;
    let submittedCount: number = 0;
    for (const submission of submissions) {
        if (submission.submitted) {
            totalScore += submission.score;
            submittedCount++;
        }
    }
    return submittedCount > 0 ? totalScore / submittedCount : 0;
}

function findHighestScore(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let highest: number = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score > highest) {
            highest = submission.score;
        }
    }
    return highest;
}

function findLowestScore(submissions: { student: string; submitted: boolean; score: number }[]): number {
    let lowest: number = 100;
    for (const submission of submissions) {
        if (submission.submitted && submission.score < lowest) {
            lowest = submission.score;
        }
    }
    return lowest === 100 ? 0 : lowest;
}

function printSubmissionReport(submissions: { student: string; submitted: boolean; score: number }[]): void {
    console.log(`Total Students: ${submissions.length}`);
    console.log(`Submitted Assignments: ${countSubmittedAssignments(submissions)}`);
    console.log(`Missing Assignments: ${countMissingAssignments(submissions)}`);
    console.log(`Passed Students: ${countPassedStudents(submissions)}`);
    console.log(`Students Requiring Revision: ${countStudentsRequiringRevision(submissions)}`);
    console.log(`Average Score: ${calculateAverageScore(submissions).toFixed(2)}`);
    console.log(`Highest Score: ${findHighestScore(submissions)}`);
    console.log(`Lowest Score: ${findLowestScore(submissions)}`);
}

const report = printSubmissionReport(submissions);
console.log(report);