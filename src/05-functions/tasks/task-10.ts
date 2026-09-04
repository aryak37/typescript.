/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Zulfikar",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];


function countTotalEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    return enrollments.length;
}

function countCompletedEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.completed) {
            count++;
        }
    }
    return count;
}

function countIncompleteEnrollments(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    return countTotalEnrollments(enrollments) - countCompletedEnrollments(enrollments);
}

function calculateCompletionPercentage(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    const total = countTotalEnrollments(enrollments);
    const completed = countCompletedEnrollments(enrollments);
    return total > 0 ? (completed / total) * 100 : 0;
}

function findHighestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let highest = -Infinity;
    for (const enrollment of enrollments) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }
    return highest;
}

function findLowestScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    let lowest = Infinity;
    for (const enrollment of enrollments) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }
    return lowest;
}

function calculateAverageScore(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): number {
    const total = enrollments.reduce((sum, enrollment) => sum + enrollment.score, 0);
    const count = countTotalEnrollments(enrollments);
    return count > 0 ? total / count : 0;
}

function getPassingStudents(enrollments: { student: string; course: string; completed: boolean; score: number; duration: number }[]): string[] {
    return enrollments.filter(enrollment => enrollment.score >= 75).map(enrollment => enrollment.student);
}
