//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    let number = parseInt($("input#num1").val());
    
    
console.log(number);
    if (number > 3999) {
        alert("Slow down brother!");
    } 
    else {
      $("ul#output").append("<li>" + "ROMAN NUMERAL" + "</li>");
    }
  });
});

