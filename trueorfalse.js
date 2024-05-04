function countTrue(arr) {
	if(arr.length===0) return 0;
	let count=0;
	for(var i=0; i<arr.length;i++){
		if(arr[i]===true){
			count++;
		}
	}
    console.log(count,"finding");
	return count;
}


// countTrue([true, false, false, true, false])
// countTrue([false, false, false, false])
// countTrue([])
// countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]) 
// countTrue([true, false, true, true, false, false, false, false, false])
// countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false])
// countTrue([true, false, true, true, true, false, true, true, false, false])
// countTrue([false, false, false, false, true, false, true, false, true, false, false])
// countTrue([true, false, false, false, true, false, false, true, false, false, false])
// countTrue([true, true, false, true, false, false, false, false, true, false])
// countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false])
// countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false])
countTrue([true, true, false, false, false, false, true, false, true, true, false, true])