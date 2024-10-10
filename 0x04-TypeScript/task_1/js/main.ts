interface Teacher {
    readonly firstName: string;  // Readonly so it's only set during initialization
    readonly lastName: string;   // Readonly as well
    fullTimeEmployee: boolean;   // Mandatory
    yearsOfExperience?: number;  // Optional
    location: string;            // Mandatory
    [key: string]: any;          // Index signature to allow any additional properties
  }
  
  // Example:
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,  // Additional attribute
  };
  
  console.log(teacher3);
  