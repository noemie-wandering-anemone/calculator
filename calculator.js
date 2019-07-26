var entries = [];
var input = "";

let display = document.getElementById('display'); //access the html input tag with id = display

listen();

function listen () {
  //var buttons = document.getElementsByTagName('button');
  document.addEventListener('click', buttonEffect); //listen to each click on page. Can it be limited to button elements?
}

function buttonEffect () {
    var button = event.target.textContent; //retrieve text between button tags
    if (button === 'AC') {
      //reset all variables
      allClear();
    } else if (button === 'C') {
      //reset the last entry
      clear()
    } else if (button === "=") {
      //Perform operation
      calculate();       
    } else if (!isNaN(button) || button === ".") {
      isNumber(button);
    } else {
      storeNumber(button);   
    };
}




function allClear () {
  entries = [];
  input = "";
  display.value = "0";
}

function clear () {
  input = "";
  display.value = "0";
}

function calculate () {
  display.value = eval(display.value);         //replace eval() as it's a security risk  
}

function isNumber (button) {
  if (button === "0" && input.charAt(0) === "") {
    //do not add multiple zeros at the start
    return; 
  } else if (display.value === "0") {
    //remove default zero when starting a calculation with a digit
    display.value = button;
  } else if (input.includes(".") && button === ".") {
    //prevent from adding a . if one is already there - broken, need to temporary store values
    return;
  } else {
    input += button;
    display.value += button; //Keep the full formula in display field
  }
}

function storeNumber (button) {
  entries.push(input);
  entries.push(button);
  input = "";
  display.value += button;
}