//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const num1 = parseInt($("input#num1").val());
    const num2 = parseInt($("input#num2").val());
    
    let elements = num1 / num2; 
    let array=[];

    if(num1, num2) {
      if (num2 > num1) {
        alert("Please enter a larger 'count to' number");
      }
      else {
        if ((num1 <= 0) || (num2 <= 0)) {
          alert("Please enter a larger number")
        }
        else {
          if (isNaN(num1,num2)) {
            alert("Please enter a number");  
          }
          else {
            for(let i=0; i<elements; i++) {
            array.push(i * num2);
            }
            stringArray = array.join(", ");

            $(".num1").append(num1);
            $(".num2").append(num2);
            $(".array").append(stringArray);
            $("#output").show();
          }
        }
      }
  }
  else {
    alert ("enter a number you rascal")
  }
  });
});

/*if (num1 > num2) {
  alert("'count to' must be larger");
} else if (!num1 || !num2) {
  alert("Please enter a number");
} else {
  for(let i=0; i<elements; i++) {
    array.push(i * num2);
  }*/