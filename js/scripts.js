//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    
    let numbers = $("input#num1").val();
    
    rnArray = ["I", "V", "X", "L", "C", "D"]
    // if numbers length === 1, then ones position (I, II, III, IV, V, VI, VII, VIII, IX)
    // if numbers length === 2, then [0]th position is tens (X, XX, XXX, XV, V, VX, VXX, VXXX, XC)
    // if numbers length === 3, then [0]th position is hundreds (C, CC, CCC, CD, D, DC, DCC, DCCC, CM)
    // if numbers length === 4, then [0]th position is thousands (M, MM, MMM)
    
    number = "1237"
    let arrayNumber = number.split("")

    arrayNumber = ['1', '2', '3', '7']

    let variable = arrayNumber.join("")

    const 

  
    if (number > 10) {
    // for (const element of numbers) {
    //   
    //   } 
     
    }
    
    //2237
    //if can be divided by 1000 yes, how many 2, MM; 
    //if can remaining numbers 3 number 237 is divided by 100, yes, 2 2 CC 
    //

    //
    // joing mmccvi
    // repeat>3
    //subtracting move thingfs around
    // 
  });
});

// I= 1 V=5 X=10 L=50 C=100, D=1000
//11. 10/5 YES how many times, 2, whats the remainder 2. 
//make an array with all symbol
//give symbols their respective values.
//10

  // if (number > 3999) {
    //     alert("Slow down brother!");
    // } 
    // else {
    //   $("ul#output").append("<li>" + "ROMAN NUMERAL" + "</li>");
    // }