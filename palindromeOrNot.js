// const palindromeOrNot = (string) => {
//   let result1 = [];
//   let result2 = [];

//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     result1.push(element);
//   }

//   for (let i = string.length - 1; i >= 0; i--) {
//     const element = string[i];
//     result2.push(element);
//   }
//   console.log(result1, result2, "final result");
//   if (result1 === result2) {
//     console.log("result is palindrome");
//   }
// };

// palindromeOrNot("civic");

// function palindrome(str) {
//   // let string = str.split("").reverse().join("");
//   // console.log(string, "hello");

//   //  this below compare between start letter with last letter and increase from start and decrease from end to keep comparing
//   let length = str.length;

//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str.charAt(length - i - 1)) {
//       console.log("it is not palindrome");
//     }
//   }
//   console.log("it is palindrome");
// }
// palindrome("sasasa");

function palindrome(str) {
  let flag = true;
  let j = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    const element = str[i];
    if (element !== str[j]) {
      flag = false;
      break;
    }
    j--;
  }
  if (flag) {
    console.log("it is palindrome");
  } else {
    console.log("it is not palindrome");
  }
}

palindrome("sammas");
