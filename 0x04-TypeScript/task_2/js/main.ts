// Define the string literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

// Test cases
console.log(teachClass('Math'));      // Teaching Math
console.log(teachClass('History'));   // Teaching History
