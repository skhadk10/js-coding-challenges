function reversedInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed)*Math.sign(n)
}

reversedInt(15);

function reverseInt(ints) {
  if (ints <= 0) {
    ints * -1;
  } else {
    ints;
  }
  let reverse = "";
  let integerString = ints.toString();
  for (let char of integerString) {
    reverse = char + reverse;
  }

  return parseInt(reverse);
}
console.log(reverseInt(-15));
