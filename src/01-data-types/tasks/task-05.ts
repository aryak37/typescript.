/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    EID: string;
    name: string;
    date: string;
    checkin: string;
    checkout: string;
    workinghours: string;
    present: boolean;
};

const attendance: Attendance[] = [
    {
        EID: "015",
        name: "Kang Haerin",
        date: "21-07-2026",
        checkin: "09:00",
        checkout: "17:00",
        workinghours: "8 Hours",
        present: true,
    },
    {
        EID: "011",
        name: "Marsh Danielle",
        date: "22-07-2026",
        checkin: "-",
        checkout: "-",
        workinghours: "-",
        present: false,
    },
    {
        EID: "007",
        name: "Kim Minji",
        date: "23-07-2026",
        checkin: "09:00",
        checkout: "17:00",
        workinghours: "8 Hours",
        present: true,  
    }
];

console.log(attendance);