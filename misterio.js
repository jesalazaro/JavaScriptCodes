function  Misterio(a, b){
  if(a <= 0 && b <= 0){
    return 1;
  }
  else if(a%2 == 0){
	return a + Misterio(b, b-1);
  }
  else{
  	return b + Misterio(b+1, a);
  }
}
  
console.log(Misterio(2, 6));