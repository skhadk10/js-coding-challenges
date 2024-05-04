// Given a String, return the charecter that is most
// commonl;y used in the string
// --- examples
// maxChar("abbcccccdd")==="c"
// maxChar("apple 123111111")==="1"

function maxChar(str) {
  let result = {};
  let max = 0;
  let maxChar = "";
  for (let val of str) {
    !result[val] ? (result[val] = 1) : (result[val] += 1);
  }
  for(let key in result) {
    if(result[key]>max){
        max = result[key];
        maxChar=key;
    }

//   for (const [key, value] of Object.entries(result)) {
//     if (value > max) {
//       max = value;
//       maxChar = key;
//     }
  }
  console.log(maxChar);
  return maxChar;
}
maxChar("abbcccccdd");
