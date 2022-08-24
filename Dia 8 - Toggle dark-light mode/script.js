let checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change',()=>{

    if(checkbox.checked === true){
        document.querySelector('body').style.background = '#29292E'
        document.querySelector('body').style.transition = '0.5s'
        document.querySelector('#dark').style.visibility = 'visible'
        document.querySelector('#light').style.visibility = 'hidden'
    } else {
        document.querySelector('body').style.background = '#E1E1E6'
        document.querySelector('body').style.transition = '0.5s'
        document.querySelector('#dark').style.visibility = 'hidden'
        document.querySelector('#light').style.visibility = 'visible'
    }

})