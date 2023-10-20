function calculate(){
    let answer = eval(displaydiv.innerHTML)
    displaydiv.innerHTML = answer 
}

function clearDisplay(){
    displaydiv.innerHTML = '';
}

function clickButton(value){
    let currentdisplay = displaydiv.innerHTML
    if (value === '←') {
        displaydiv.innerHTML = currentdisplay.slice(0, -1);
    }  else if (value === '√') {
        displaydiv.innerHTML = Math.sqrt(currentdisplay)
    } else if (value === 'x²') {
        displaydiv.innerHTML = currentdisplay*currentdisplay
    } else if (value === '%') {
        displaydiv.innerHTML = f
    } else { 
        displaydiv.innerHTML += value;
    }
}
