// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional
    location: string;
    [key: string]: any; // allow additional properties
}

// Implement the Teacher interface
const teacher1: Teacher = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
};

// Function to print the teacher's name
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
