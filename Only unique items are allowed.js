function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const inputArray = [1, 2, 3, 2, 4, 5, 1, 6, 5];

const uniqueArray = removeDuplicates(inputArray);
console.log("Unique Array:", uniqueArray);
