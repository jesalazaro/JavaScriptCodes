function truncateString(str, num) {
  if(str.length > num){
    let preResult = str.slice(0, num);
    preResult += "...";
    console.log(preResult);
  }
  return str;
}

truncateString("A-", 1);
