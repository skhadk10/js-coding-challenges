function countingStiring(anagram){
let result={};

for(let i=0; i<anagram.length;i++){
    let String=anagram[i];
   if(!result[String]){
    result[String]=1;
   } else {
    result[String]++;
   }
}
console.log(result,"result");

// for(let i=0; i<result.length;i++)
//     {
//         let String=result[i];
//         if(result[String]){
//             result[String]--;
//            }
//     }
}


countingStiring('anagram')