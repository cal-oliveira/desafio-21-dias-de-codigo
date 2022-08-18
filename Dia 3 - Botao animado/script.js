let body = document.getElementById('body')
let input = document.getElementById('input')
let p = document.getElementById('p')

input.addEventListener('change',()=>{

    if(input.checked === true){
        body.style.background = '#202024'
        body.style.transition = '0.5s'
        p.innerText = 'Switch to light mode'
        return
    }

    if(input.checked === false){
        body.style.background = '#E1E1E6'
        p.innerText = 'Switch to dark mode'

    }

})