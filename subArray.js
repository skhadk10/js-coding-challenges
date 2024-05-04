// given an array and chunk size, return the subarray, when each subarry is the length of size.
// chunk ([1,2,3,4,],2)=([1,2],[3,4])
// chunk ([1,2,3,4,5],2)=([1,2],[3,4],[5])
// chunk ([1,2,3,4,5,6],2)=([1,2],[3,4],[5,6])
// chunk ([1,2,3,4,],10)=([1,2,3,4.5])

function chunk(array, size) {
  const result = [];

  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index+size));
  }
  console.log(result);
  return result;
}

chunk([1, 2, 3, 4], 2);
