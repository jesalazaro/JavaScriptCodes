function findLongestWordLength(str) {
    let words = str.split(" ");
    let wordsLength = [];
    let counter = 0;
    let longestWord = 0;

    for(let i = words.length - 1; i >= 0; i--){
        counter = words[i].length;
        wordsLength.push(counter);
    }

    for(let j = wordsLength.length - 1; j >= 0; j--){
        if(wordsLength[j] > longestWord ){
            longestWord = wordsLength[j];
        }
    }
    return longestWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));