// Import the functions
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

// Get the list of students
const students = getListStudents();

// Test the function with 'San Francisco'
console.log(getStudentsByLocation(students, 'San Francisco'));
