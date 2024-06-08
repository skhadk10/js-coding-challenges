// how to find second largest value, and remove first largest value in array.
// first find the largest value;
// use indexOf to find the index of largest value
// use splice to remove the largest value
// find the second largest value
function secondLargeValue(arr) {
  // let largestValue=Math.max(...arr)
  let largestValue = arr.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
  });
  let index = arr.indexOf(largestValue);
  arr.splice(index, 1);
  let secondLargeValue = Math.max(...arr);
  console.log(secondLargeValue);
  return secondLargeValue;
}

secondLargeValue([1, 4, 6, 88, 7]);
