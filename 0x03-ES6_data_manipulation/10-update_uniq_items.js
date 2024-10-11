// Define the function
export default function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
      throw new Error("Cannot process");
    }
  
    // Iterate through the Map and update quantities
    for (const [item, quantity] of map.entries()) {
      if (quantity === 1) {
        map.set(item, 100); // Update quantity to 100 if it was 1
      }
    }
  }
  