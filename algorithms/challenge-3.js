function sumMix(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = parseInt(arr[index]);
    sum = sum + element;
  }
  return sum;
}
console.log(sumMix([9, 3, "7", "3"]));
module.exports = sumMix;
