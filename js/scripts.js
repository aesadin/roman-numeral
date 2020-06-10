//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    
    const vowels = ['a', 'e','i','o', 'u'];
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y'];
    const userWord = "apple";
    pigLatin(userWord);
    function pigLatin (userWord) {  //checks to see if first char is vowel
      let newArray = userWord.split("");
      let outputArray = newArray.slice();
      let output;
      
      vowels.forEach(function(vowel){  //if first char is a vowel, removes the vowel and adds the vowel to the end of the word
        if (newArray[0]===vowel) {
          outputArray.push(outputArray.shift());
          outputArray.push("w","a","y");
          output = outputArray.join("");
        }
      });
      console.log(output);
      return output;

      consonants.forEach(function(consonant) {
        if (newArray[0]===consonant) {
          let consecutiveCons
          for (i = 1)
        }
      });
    }
  });
});