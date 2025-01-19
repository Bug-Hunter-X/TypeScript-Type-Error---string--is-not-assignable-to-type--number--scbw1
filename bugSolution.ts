function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: both arguments are numbers
console.log(result1); // Output: 3

const result2 = add(1, parseInt('2', 10)); // Correct: string converted to number
console.log(result2); // Output: 3

function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return a + numB;
}
const result3 = addSafe(1, "2");
console.log(result3); //Output: 3