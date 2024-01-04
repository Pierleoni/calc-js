let n = 5


const PI = Math.PI

let nome = `Marco`
nome = `Marilisa`



const HARRYKISSINGERÈMORTO = true


let ns = [1, 2, 3, 4, 5]

let person = {
    nome: `adolfIttle`,
    eta: 135,



}


let n1 = 0

let n2 = 0

let n3 = 0
let s1 = ``
let s2 = ``

let buttons = document.querySelectorAll(`button`)
//[0].attributes.disable
//s1!== ``|| s2!== ``

/*function buttonCheck() {
    console.log(buttons[0]);
} 
TO DO:assegnare ai bottoni la proprietà disable se dei form sono vuoti*/

//per fare un operazione matematica tramite funzione e DOM
function upDateForm(id) {
    switch (id) {
        case `n1`:
            n1 = Number(document.getElementById(id).value)

            break;
        case `n2`:
            n2 = Number(document.getElementById(id).value)
            break;
        case `n3`:
            n3 = Number(document.getElementById(id).value)

            break;
        case `s1`:
            s1 = document.getElementById(id).value
            break;
        case `s2`:
            s2 = document.getElementById(id).value
            break;
        default:
            break;
    }
    buttonCheck()
}

function risultato() {
    console.log(n1 == 2 * n1 && s2 !== s1);
}

function risultatoA2() {

    //n1 = Math.pow(n1, n1)
    console.log(s1 !== `` &&s2!==`treno`);

}











