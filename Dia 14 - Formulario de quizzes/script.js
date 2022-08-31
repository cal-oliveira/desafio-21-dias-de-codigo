let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')

let res = 3

option1.addEventListener('click',()=>{
    option1.classList.add('selected')

    option1.classList.add('wrong')
    option2.classList.add('wrong')
    option3.classList.add('correct')
    
})

option2.addEventListener('click',()=>{
    option2.classList.add('selected')

    option1.classList.add('wrong')
    option2.classList.add('wrong')
    option3.classList.add('correct')
})

option3.addEventListener('click',()=>{
    option3.classList.add('selected')

    option1.classList.add('wrong')
    option2.classList.add('wrong')
    option3.classList.add('correct')
})