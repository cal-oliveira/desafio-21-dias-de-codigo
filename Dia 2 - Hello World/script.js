let h1 = document.getElementById('h1')
let body = document.getElementById('body')
let btn = document.getElementById('btn')
let flagIcon = document.getElementById('flag-icon')

function change(){

   if(h1.textContent === 'Hello World!'){
    h1.innerText = 'Olá, mundo!'
    flagIcon.setAttribute('src','./images/br.png')
    return
   }

   if(h1.textContent === 'Olá, mundo!'){
    flagIcon.setAttribute('src','./images/us.png')
    h1.innerText = 'Hello World!'
   }

}

btn.addEventListener('click',()=>{
    change()
})