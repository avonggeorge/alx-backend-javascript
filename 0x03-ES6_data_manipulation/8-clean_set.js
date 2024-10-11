// Define the function
export default function cleanSet(set, startString) {
    // Check if startString is empty; return an empty string
    if (startString === '') return '';
  
    // Create an array of values that start with startString
    const result = Array.from(set) // Convert Set to Array
      .filter(value => value.startsWith(startString)) // Filter values that start with startString
      .map(value => value.slice(startString.length)); // Remove startString and keep the rest
  
    // Join the results with '-' and return
    return result.join('-');
  }
  