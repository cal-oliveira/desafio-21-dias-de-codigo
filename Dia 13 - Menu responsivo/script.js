let responsive = document.getElementById('responsive-menu')

responsive.style.visibility = 'hidden'

function menu(){
    if(responsive.style.visibility === 'hidden'){
        responsive.style.visibility = 'visible'
    } else {
        responsive.style.visibility = 'hidden'
    }
}