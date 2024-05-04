// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function numberStringSeperation(array) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result.push(array[i]);
    }
  }
  console.log(result, "check");
}
numberStringSeperation([1, 2, "a", "b", "c", "d", "e", "f", 4, 5, 6]);
