function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for(let i in usersObj){
   console.log(usersObj[i].online);
   if(usersObj[i].online == true){
       count += 1;
   }
  }
  return count; 
  // Only change code above this line
}

