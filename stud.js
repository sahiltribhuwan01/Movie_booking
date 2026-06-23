const students = [
    { id: 1, name: "Sahil", marks: 85 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "Priya", marks: 92 },
    { id: 4, name: "Amit", marks: 35 },
    { id: 5, name: "Sneha", marks: 78 }
];

// forEach() - Display all students
console.log("Student List:");
students.forEach(student => {
    console.log(student.name + " - " + student.marks);
});

// map() - Get student names
const studentNames = students.map(student => student.name);
console.log("\nStudent Names:");
console.log(studentNames);

// filter() - Students who passed (marks >= 40)
const passedStudents = students.filter(student => student.marks >= 40);
console.log("\nPassed Students:");
console.log(passedStudents);

// find() - Find a student by name
const foundStudent = students.find(student => student.name === "Priya");
console.log("\nFound Student:");
console.log(foundStudent);

// reduce() - Calculate total marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log("\nTotal Marks:");
console.log(totalMarks);

// some() - Check if any student failed
const anyFailed = students.some(student => student.marks < 40);
console.log("\nAny Student Failed?");
console.log(anyFailed);

// every() - Check if all students passed
const allPassed = students.every(student => student.marks >= 40);
console.log("\nAll Students Passed?");
console.log(allPassed);