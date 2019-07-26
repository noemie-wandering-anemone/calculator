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
      display.value = "";// how to display 0 as value without 0 staying when typing
    } //else if (button === "x") {
      //entries.push(*);
      //display.value += button;
    //}
    //else if (button === "") {}
    //else if (button === "=") {}
    
    
    
    
    else {
      entries.push(button);
      display.value += button;
    }


}



 



function clearAll () {
}