viewApp()
  function viewApp(){
      let html = /*html*/`
    <h1>KALKULATOR:</h1>
    <div id="display" class='display'></div>
    <div id='kalkulator' class='buttonGrid'>
        ${makeButtons()}
        <button onclick='clearDisplay()'>x²</button>
        <button onclick='calculate()'>=</button>
        <button onclick='clearDisplay()'>C</button>
        <br>
    </div>  
    `;
    app.innerHTML = html
}

const displaydiv = document.getElementById('display')

function makeButtons(){
    let buttons = '';
    for(let i = 0; i < knapper.length; i++){
        buttons += `<button onclick='clickButton("${knapper[i]}")'>${knapper[i]}</button>`
    }
    return buttons
}




