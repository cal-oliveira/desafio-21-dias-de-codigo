let passElement = document.getElementById('pass')
let pass

function newPass(){
    pass = Math.random().toString(36).substr(2)
    passElement.innerText = pass
}

function copy(){
    console.log(pass)
    navigator.clipboard.writeText(pass)
}

newPass()
