function capitalize(str) {
  // this will splict the letter with a space
  let words = str.split(" ");
  console.log(words, "space between each word");
  let result = [];

  for (let word of words) {
    // first letter capital and rest splice  eg: "ish" "s" "y" "oney"
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(result.join(" "));
  return result.join(" ");
}
capitalize("this is my money mate");
