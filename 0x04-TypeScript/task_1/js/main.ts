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

// Define the interface for the StudentClass constructor
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

// Define the StudentClass
class StudentClass implements StudentClassConstructor {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage of StudentClass
const student1 = new StudentClass('Alice', 'Smith');
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working
