function swapValues(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let a = 5;
let b = 10;

const swappedValues = swapValues(a, b);
console.log("Swapped Values:", swappedValues);
console.log("a:", a); // original value of a (5)
console.log("b:", b); // original value of b (10)
