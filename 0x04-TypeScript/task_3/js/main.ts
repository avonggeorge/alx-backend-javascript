/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and store the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

// Update the row by adding an age field
const updatedRow: RowElement = { 
  ...row, 
  age: 23 
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row:`, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
