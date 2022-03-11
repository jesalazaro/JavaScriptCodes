function bouncer(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){ 
        result.push(arr[i]);
      } 
    }
    console.log(result);
    return result;
}

bouncer([7, "ate", false, false, 9]);