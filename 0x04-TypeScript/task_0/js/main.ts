// src/index.ts  

interface Student {  
    firstName: string;  
    lastName: string;  
    age: number;  
    location: string;  
}  

// Create two students  
const student1: Student = {  
    firstName: "John",  
    lastName: "Doe",  
    age: 21,  
    location: "New York"  
};  

const student2: Student = {  
    firstName: "Jane",  
    lastName: "Smith",  
    age: 22,  
    location: "Los Angeles"  
};  

// Create an array of students  
const studentsList: Student[] = [student1, student2];  

// Create a table and render students  
function renderTable(students: Student[]) {  
    const table = document.createElement('table');  
    const headerRow = table.insertRow();  
    const header1 = headerRow.insertCell(0);  
    const header2 = headerRow.insertCell(1);  
    
    header1.innerText = 'First Name';  
    header2.innerText = 'Location';  

    students.forEach(student => {  
        const row = table.insertRow();  
        const cell1 = row.insertCell(0);  
        const cell2 = row.insertCell(1);  

        cell1.innerText = student.firstName;  
        cell2.innerText = student.location;  
    });  

    document.body.appendChild(table);  
}  

// Call the render function  
renderTable(studentsList);
