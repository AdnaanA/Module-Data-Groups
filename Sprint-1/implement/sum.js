function sum(elements) {
  let total = 0;  // Initialize total to 0
  for (const el of elements) {  // Iterate through each element in the array
    if (typeof el === "number") {  // Check if the element is a number
      total += el;  // Add the number to the total
    }
  }
  return total;  // Return the final sum
}

module.exports = sum;
