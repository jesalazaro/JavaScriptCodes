function chunkArrayInGroups(arr, size) {
  let newArray = [];
  let f;
  let countValue = arr.length/size;
  for(let i = 0; i < countValue; i++){
    console.log(i);
   f = arr.splice(0,size); 
   newArray.push(f);
  }
  console.log(newArray);
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);