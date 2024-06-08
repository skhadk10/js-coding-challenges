// how to find max and mi value in a given array in javascript;

function getMaxAndMinValue(arr) {
  let max= arr.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
  });
  let min= arr.reduce((pre, cur) => {
    return pre < cur ? pre : cur;
  });
  console.log(max,min);
}
getMaxAndMinValue([10, 20, 70, 60, 30, 40]);

// is there value inside max
