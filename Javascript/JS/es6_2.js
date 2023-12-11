function runActivity() {
  const iterable = "Hello";
  const char_array = Array.from(iterable);
  console.log("Array from iterable:", char_array);

  const keys_array = Array.from(char_array.keys());
  console.log("Indices of array elements:", keys_array);

  const numbers = [1, 2, 5, 8, 9];
  const evenNumber = numbers.find((num) => num % 2 === 0);
  console.log("First even number:", evenNumber);

  const vowels = ["a", "e", "i", "o", "u"];
}
