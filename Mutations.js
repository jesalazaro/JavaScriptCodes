function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for(let i in second){
      if(first.indexOf(second[i]) == -1){
        return false;
      }
  }
  return true;
}

console.log(mutation(["hello", "hel"]));