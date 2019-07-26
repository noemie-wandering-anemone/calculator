var entries = [];
var input = "";

let display = document.getElementById('display'); //access the html input tag with id = display

listen();

function listen () {
  document.addEventListener('click', buttonEffect); //listen to each click on page. Can it be limited to button elements?
}

function buttonEffect () {
    var button = event.target.textContent; //retrieve text between button tags
    if (button === 'AC') {
      //reset all variables
      entries = [];
      input = "";
      display.value = "0";
    } //else if (button === "x") {
      //entries.push(*);
      //display.value += button;
    //}
    //else if (button === "") {}
    else if (button === "=") {
      //Perform operation
      display.value = eval(display.value);          //replace eval() as it's a security risk
    } else {
      if (button === "0" && display.value.length === 1){
        //do not add multiple zeros at the start
        return; 
      } else if (display.value === "0" && !isNaN(button)) {
        //remove default zero when starting a calculation with a digit
        display.value = button;
      } else if (display.value.includes(".") && button === ".") {
        //prevent from adding a . if one is already there
        return;
      }
      else {
        //add numbers and operands to the display field
        entries.push(button);
        display.value += button;
      };
      
    }


}



 



function clearAll () {
}