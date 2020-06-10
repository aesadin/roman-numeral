//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    
    const userInput = $("input#sentence").val();
    const vowels = ["a", "e", "i", "o", 'u'];   
    
    function pigLatin (inputWord) {  
      let inputArray = inputWord.split(""); 
      let output;
      for (i = 0; i < inputArray.length; i++) {
        if (vowels.indexOf(inputArray[i]) !== -1) {  //breaks if there is a vowel 
          break;
          }
        if (inputArray.slice(i, i+2).join("") === "qu") { //
          i++;
        	}
      }
     	if (i === 0) {
      output = inputArray.join("") + "way"   // fixes apple
      }
      else {
      output = inputArray.slice(i).join("") + inputArray.slice(0, i).join("") + "ay"  //
      }
      console.log(output);    //
      return output;
     	}

    
   $("#show-me").append("<li>" + pigLatin(userInput) + "</li>");
    
  });
});
