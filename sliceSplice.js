function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice;
    for(let i in arr1){ 
    result.splice(n, 0, arr1[i]);
    n += 1;
    }
    return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);