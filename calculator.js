var entries = [];
var input = "";
var result = 0;

const display = document.getElementById("display"); //access the html input tag with id = display

listen();

function listen() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonEffect);
  }
}

function buttonEffect() {
  var button = event.target.textContent; //retrieve text between button tags
  if (button === "AC") {
    //reset all variables
    allClear();
  } else if (button === "C") {
    //reset the last entry
    clear();
  } else if (button === "=") {
    //Perform operation
    calculate();
  } else if (!isNaN(button) || button === ".") {
    isNumber(button);
  } else {
    storeNumber(button);
  }
}

function allClear() {
  entries = [];
  input = "";
  result = 0;
  display.value = "0";
}

function clear() {
  input = "";
  display.value = entries.join(" ");
}

function calculate() {
  entries.push(input);
  input = "";
  result = parseInt(entries[0], 10);
  for (var i = 1; i < entries.length; i += 2) {
    var operator = entries[i];
    var num = parseInt(entries[i + 1]);
    if (operator === "+") {
      result += num;
    }
    if (operator === "-") {
      result -= num;
    }
    if (operator === "*") {
      result *= num;
    }
    if (operator === "/") {
      result /= num;
    }
  }
  entries = [];
  display.value = result;
}

function isNumber(button) {
  if (button === "0" && input === "") {
    //do not add multiple zeros at the start
    return;
  } else if (input.includes(".") && button === ".") {
    //prevent from adding a . if one is already there
    return;
  } else {
    input += button;
    display.value = entries.join(" ") + " " + input; //Keep the full formula in display field
  }
}

function storeNumber(button) {
  if (isNaN(entries[entries.length - 1]) && entries.length > 0) {
    entries[entries.length - 1] = button;
  } else if (input === "") {
    entries.push(result);
    entries.push(button);
  } else {
    entries.push(input);
    entries.push(button);
    input = "";
  }
  display.value = entries.join(" ");
}
