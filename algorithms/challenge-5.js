function filterList(arr) {
  let list = [];
  arr.forEach((element) => {
    if (typeof element === "number") {
      list.push(element);
    }
  });
  return list;
}
module.exports = filterList;
