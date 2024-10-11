// Define the function
export default function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students by city
    return students
      .filter(student => student.location === city) // Step 1: Filter by city
      .map(student => {
        // Step 2: Map to include grades
        const gradeEntry = newGrades.find(grade => grade.studentId === student.id); // Find the grade entry for the student
        return {
          ...student, // Spread existing student properties
          grade: gradeEntry ? gradeEntry.grade : 'N/A' // Assign grade or 'N/A'
        };
      });
  }
  