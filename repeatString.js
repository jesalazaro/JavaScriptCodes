function repeatStringNumTimes(str, num) {
    let dummy = str;
    if(num <= 0){
        return "";
    }
    else{
    for(let i = 1; i < num  ; i++){
      str += dummy;
    }
    
    return str;
}
  }
  
  console.log(repeatStringNumTimes("abc", 3));