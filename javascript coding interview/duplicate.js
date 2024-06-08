// how to find duplicate elements in array in javascripts

function duplicate(array) {
  if (array.length <= 0) return false;
  let result = [];
  let count = [];
  for (let val of array) {
    if (result[val]) {
      count.push(val);
    } else {
      result.push(val);
    }
  }
  console.log(count);
  return count;
}

duplicate([1, 2, 3, 4, 5, 8, 8, 5, 6]);

function duplicateAlternates() {
  const arrNumber = [1, 2, 8, 2, 9, 8, 9];

  const duplicate = arrNumber.filter(
    (element,
    index,
    array) => array.indexOf(element) !== index
  );
  console.log(duplicate);
}

duplicateAlternates()
