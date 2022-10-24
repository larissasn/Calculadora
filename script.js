function insertValues(num) {
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input + num
}

function calculate() {
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)
}

function clearInput() {
    document.getElementById('input-value').value = ""
}

function invertValue() {
    calculate()
    
    document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1 
}
/* Falta fazer o calculo de porcentagem*/ 
function percent() {
    calculate()
   
}
