//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    let sentence;
    $("input#sentence").each(function(){
      sentence = $(this).val();
    });  
    const regex = /^[0-9]+$/i
    let wordsArray = sentence.split(" ");

    if (regex.test(sentence)) {
        alert("Use your Words");
    } 
    else {
      $("#show-me").append("<li>" + wordsArray.map(word => pigLatin(word)).join(" ") + "</li>");
    }
  });

});

  //Business logic
  function pigLatin (inputWord) {  
    const vowels = ["a", "e", "i", "o", 'u'];  
    let inputArray = inputWord.split(""); 
    let output;
    for (i = 0; i < inputArray.length; i++) {
      if (vowels.indexOf(inputArray[i]) !== -1) {  //breaks if there is a vowel. 
        break;
        }
      if (inputArray.slice(i, i+2).join("") === "qu") { //determines if it two consecutive chars === qu.
        i++;
        }
    }
    if (i === 0) {
    output = inputArray.join("") + "way"   // fixes apple
    } else {
    output = inputArray.slice(i).join("") + inputArray.slice(0, i).join("") + "ay"  //
    }
    return output;
  }
