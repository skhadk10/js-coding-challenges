function sorting(array) {
  return QuickSort((start = 0), (end = array.length - 1), array);
}

function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length - 1 + i; j++) {
      if (array[j] < array[i]) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  console.log(array, "bubbleSort");
  return array;
}

console.log(sorting([9, 7, 6, 2, 5, 8, 1]));
//
function selectionSort(array) {
  if (array.length === 0) return false;
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      var temp = array[lowest];
      array[lowest] = array[i];
      array[i] = temp;
    }
  }

  return array;
}

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    let current = array[i];
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      // duplicates
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
    console.log(array[j + 1], "finding2");
  }
  return array;
}

function merge(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function QuickSort(left = 0, right = array.length - 1, array) {
  if (left < right) {
    let pivot = quick(left, right, array);
    QuickSort(left, pivot - 1, array);
    QuickSort(pivot + 1, right, array);
  }

  return array;
}

function quick(start = 0, end = array.length - 1, array) {
  function swap(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot=array[start];
  let swapIndex=start ;

  for (let i = start+1; i < array.length; i++) {
    if(pivot> array[i]){
      swapIndex++;
     
      swap(swapIndex, i, array)
      console.log(swapIndex,array[i],"finding");
    }
    
  }
  console.log(array[swapIndex],array[start],"soln");
  swap(swapIndex,start,array)
  return swapIndex;
}
