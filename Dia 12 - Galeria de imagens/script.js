let img1 = document.getElementById('1')
let img2 = document.getElementById('2')
let img3 = document.getElementById('3')

function back(){
    
    if(img1.classList.contains('selected')){
        img1.classList.remove('selected')
        img3.classList.add('selected')
   } else if(img3.classList.contains('selected')){
        img3.classList.remove('selected')
        img2.classList.add('selected')
   } else if(img2.classList.contains('selected')){
        img2.classList.remove('selected')
        img1.classList.add('selected')
   }

}

function next(){
   
   if(img1.classList.contains('selected')){
        img1.classList.remove('selected')
        img2.classList.add('selected')
   } else if(img2.classList.contains('selected')){
        img2.classList.remove('selected')
        img3.classList.add('selected')
   } else if(img3.classList.contains('selected')){
        img3.classList.remove('selected')
        img1.classList.add('selected')
   }

    
}