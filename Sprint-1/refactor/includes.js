// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {  // list is an array
  for (const element of list) {  // Using for...of loop to iterate through each element in the array
    if (element === target) {  // Checking if the current element matches the target value
      return true;  // Return true if a match is found
    }
  }
  return false;  // Return false if no match is found after checking all elements
}

module.exports = includes;
