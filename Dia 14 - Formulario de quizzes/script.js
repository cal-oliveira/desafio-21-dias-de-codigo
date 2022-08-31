let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')

option1.addEventListener('click',()=>{
    option1.classList.add('selected')

    setTimeout(()=>{

    },3000)
})

option2.addEventListener('click',()=>{
    option2.classList.add('selected')
})

option3.addEventListener('click',()=>{
    option3.classList.add('selected')
})