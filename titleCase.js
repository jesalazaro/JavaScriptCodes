function titleCase(str) {
  let lowerCase = str.toLowerCase();  
  let words = lowerCase.split(" ");
  let result = []
  for(let i = 0; i < words.length ; i++){
    result.push(words[i].replace(words[i][0], words[i][0].toUpperCase()));
    }
    return result.join(" ");
  }

console.log(titleCase("I'm a little tea pot")); 