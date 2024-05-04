// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

function solution(number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    var n = number[i];

    if (n % 3 === 0 || n % 5 == 0) {
      result = result + n;
    }
  }
  console.log(result);
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);
