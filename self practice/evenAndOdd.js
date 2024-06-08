//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(num) {
  let result1 = [];
  let result2 = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      //   console.log(num[i], "even");
      result1.push(num[i]);
    } else {
      result2.push(num[i]);
    }
  }
  console.log(result1,"even", result2, "odd");
}

evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
