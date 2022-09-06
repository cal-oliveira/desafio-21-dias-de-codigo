let passElement = document.getElementById('pass')
let pass

function newPass(){
    pass = Math.random().toString(36).substr(2)
    passElement.innerText = pass
}

function copy(){
    navigator.clipboard.writeText(pass)
}

newPass()
