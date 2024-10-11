// Define the function
export default function getListStudentIds(students) {
  // Check if the argument is not an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map() to return an array of student ids
  return students.map(student => student.id);
}
