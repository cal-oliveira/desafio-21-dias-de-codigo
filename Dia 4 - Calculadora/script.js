let input = document.getElementById('input')

let number1 = ''
let number2 = ''
let operation = ''
let result = 0

function getNumber(number){
    input.innerHTML += number
    if(operation === ''){
        number1 += number
    } else {
        number2 += number
    }
}

function getOperation(op){
    if(number1 !== ''){
        input.innerHTML = op
        operation = op
    }
}

function clearAll(){

    number1 = ''
    number2 = ''
    operation = ''
    result = ''

    input.innerHTML = ''

}

function resume(){
    
    if(number1 !== '' || number2 !== ''){
        result = eval(`${number1} ${operation} ${number2}`)

        input.innerHTML = result

        number1 = result
        number2 = ''
        operation = ''

        result = ''

        
    }
    
}