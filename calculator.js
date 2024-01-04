let botDisplay = document.getElementById('botDisplay')
let topDisplay = document.getElementById('topDisplay')
botDisplay.innerText = '0'
let newNum = false
let resCalc = true
let firstNum
let secondNum
let chOperand




function displayNum(value) {
    if (resCalc) {
        btDispl(value)

    } else if (newNum) {
        resNum(value)
    } else {
        btDispl(value)
    }
}


function btDispl(value) {
    if (botDisplay.innerText == 0) {
        switch (value) {
            case '0':
                break;
            case '.':
                botDisplay.innerText.concat(value)
                break;
            default:
                resNum(value)
                break;
        }
    } else {
        writeNum(value)
    }
    resCalc = false;

}

function writeNum(value) {
    botDisplay.innerText = botDisplay.innerText.concat(value)

}


function resNum(value) {
    botDisplay.innerText = value
    newNum = false
}

function addOp(value) {
    firstNum = Number(botDisplay.innerText)
    chOperand = value
    topDisplay.innerText ? topDisplay.innerText = topDisplay.innerText + botDisplay.innerText + value : topDisplay.innerText = botDisplay.innerText + value
    newNum = true

    // if (con) {
    //     result()
    // }
}

function canc() {
    if (botDisplay.innerText.length == 1) {
        botDisplay.innerText = 0
    }
    else {
        botDisplay.innerText = botDisplay.innerText.slice(0, botDisplay.innerText.length - 2)
    }
    secondNum = Number(botDisplay.innerText); 
    console.log(`stocazzo`);
}


function CE() {

}


function resBot() {

}

function result() {

}