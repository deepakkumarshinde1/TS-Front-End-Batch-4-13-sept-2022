// popup
//alert("Hello javascript from main.js");
var inputText = document.getElementById("input-text");
var textH1 = document.getElementById("text");

function printPopup() {
  // alert1("This is a function");
  var text = inputText.value;
  var message = "Welcome to " + text;
  // if want to set a text to element , we will use .innerHTML Porp
  textH1.innerHTML = message;
  textH1.style.color = "green";

  //console.log(text); // BASIC testing
} // function definition

// Events => User action eg, click,dbl click
// key

//DOM => Document Object Model
