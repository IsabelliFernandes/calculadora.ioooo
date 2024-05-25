const display = document.getElementById('display');

    function appendCharacter(char)  {
     if(display.innerText == '0' && char != ('.')) {
     display.Innertext = char
    } else {
        if(!(char == '.' && display.innerText.length - 1 = '.') ) 
           display.innerText +- char
    }
}

function clearDisplay() {
    display.innerText = '0';
}
 
function calculateResult() {
    display.innerText = eval(display.innerText);
}

