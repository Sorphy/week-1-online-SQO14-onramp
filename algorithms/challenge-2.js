function fizzBuzz(input) {
  if (input % 15 == 0) {
    return "fizzbuzz";
  }
  if (input % 3 == 0) {
    return "fizz";
  }
  if (input % 5 == 0) {
    return "buzz";
  }
  if (input % 15 != 0) {
    return input;
  }
}
module.exports = fizzBuzz;
