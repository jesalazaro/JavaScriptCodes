function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if(func(num) === true){
      return num;
    }
    }
  }


console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));