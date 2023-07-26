let evaluate = document.getElementById("evaluate");
let result = document.getElementById("result");
let modal  = document.getElementById("modal");
let calculator = document.getElementById('modal');
let calc = document.getElementById('calc')
let input = document.querySelectorAll('input');
let buttons = document.querySelectorAll('button'); 
let calcSpace = document.getElementById('calcSpace');
let divButton = document.getElementById('buttons');
let history = document.getElementById("history");
let screen = document.getElementById('screen');
let displayLine = document.getElementById('displayLine')
let bothDivs = document.getElementById('bothDivs');
let hist = document.getElementById('hist');

function display(value) {
    if (evaluate.innerText[0] === "0") {
        evaluate.innerText = "";
    }
    evaluate.innerText += value;
}
function returnTozero() {
    evaluate.innerText = "0";
    result.innerText = "";
}
function del(){
    let str = evaluate.innerText.split("");
    str.pop();
    evaluate.innerText = str.join("");
}

function resul() {
    let eva = evaluate.innerText;
    let res = eval(eva);
    result.innerText = res;
    let historyDiv = document.createElement('div');
    let callHistory = document.createElement('h2');
    let resultHistory = document.createElement('h2');
    historyDiv.appendChild(callHistory);
    historyDiv.appendChild(resultHistory);
    history.appendChild(historyDiv);
    historyDiv.style.display = "flex";
    historyDiv.style.flexDirection = "column";
    historyDiv.style.justifyContent = "center";
    historyDiv.style.alignItems = "center";
    historyDiv.style.margin = "10px";
    historyDiv.style.width = "100%";
    // const maxHistoryItems = 2;
    if (hist.childElementCount > 2) {
        // history.removeChild(history.childNodes[1]);
        let histstr = history.split("");
        histstr.pop();
        history = histstr.join(" ");
      }
      hist.appendChild(historyDiv);
      resultHistory.innerText = res;
    callHistory.innerText = eva; 
}
;

function displayModal() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}


function lightMode() {
    calcSpace.style.background = "white";
    calcSpace.style.color = "#f2f6f7";
    calc.style.color = "black"
    divButton.style.background = "#d4d0d0";
    screen.style.color = "black";
    displayLine.style.backgroundColor = "white"
    for (const button of buttons) {
        button.style.color = "black";
    }
    for (const inputs of input) {
        inputs.style.color = "black";
    }
}
function darkMode() {
    calcSpace.style.background = "rgb(25, 38, 38)";
    calcSpace.style.color = "#f2f6f7";
    calc.style.color = "white"
    screen.style.color = "white"
    divButton.style.background = "black";
    displayLine.style.backgroundColor = "white"
    for (const button of buttons) {
        button.style.color = "white";
    }
    for (const inputs of input) {
        inputs.style.color = "white";
    }
}


function displayHistory() {
    history.style.display  = "flex";
    history.style.color  = "white";
    bothDivs.style.display = "none";
}
function closeHistory() {
    history.style.display = "none";
    bothDivs.style.display = "flex";
}
function clearHisory() {
   hist.innerHTML = "";  
}