function reverse(str) {
  let reversed = "";
  for (let i = str.length-1; i >= 0; i--) {
// for(let char of str){ when i put str[i] in front then reversed we can loop from start to end .. if we loop from end to start we have to put as reversed +str[i]
//     reversed= str[i]+reversed;
// }
    reversed= reversed+ str[i];
  }
console.log(reversed);
  return reversed;
}

reverse("123456");


// function reverse(str) {
//   return str.split("").reverse().join("");
//   }
  
//   console.log(reverse("123456"));