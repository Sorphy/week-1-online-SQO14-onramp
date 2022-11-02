function countTruthy(arr) {
  var count = 0;
  arr.forEach((element) => {
    if (
      element != "" &&
      element != 0 &&
      element != null &&
      element != undefined
    ) {
      count++;
    }
  });
  return count;
}

module.exports = countTruthy;
