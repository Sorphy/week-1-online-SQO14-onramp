function calculateGrade(marks) {
  let sum = 0;

  for (let index = 0; index < marks.length; index++) {
    const element = marks[index];

    sum = sum + element;
  }

  let average = sum / marks.length;

  if (average <= 49) {
    return "F";
  }

  if (average <= 59) {
    return "E";
  }

  if (average <= 69) {
    return "D";
  }

  if (average <= 79) {
    return "C";
  }

  if (average <= 89) {
    return "B";
  }

  if (average <= 100) {
    return "A";
  }
}
module.exports = calculateGrade;
