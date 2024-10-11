// Define the function
export default function getStudentIdsSum(students) {
    // Use reduce() to sum the student IDs
    return students.reduce((acc, student) => acc + student.id, 0);
  }
  