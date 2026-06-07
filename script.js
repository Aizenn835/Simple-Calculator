const getDisplay = document.getElementById("display");

function appendToDisplay(input){
     getDisplay.value += input;
}
function calculate(){
    let convertOperator = getDisplay.value;
    convertOperator = convertOperator.replace(/x/g, "*");
    convertOperator = convertOperator.replace(/÷/g, "/");
    getDisplay.value = eval(convertOperator);
}  
function clearDisplay(){
    getDisplay.value = "";
}