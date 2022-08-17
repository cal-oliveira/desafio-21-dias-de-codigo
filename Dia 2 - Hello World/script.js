let h1 = document.getElementById('h1')
let body = document.getElementById('body')
let btn = document.getElementById('btn')

function change(){

   if(h1.textContent === 'Hello World!'){
    h1.innerText = 'Olá, mundo!'
    return
   }

   if(h1.textContent === 'Olá, mundo!'){
    h1.innerText = 'Hello World!'
   }

}

btn.addEventListener('click',()=>{
    change()
})