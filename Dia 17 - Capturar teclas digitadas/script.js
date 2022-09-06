let key = document.getElementById('key')

function keyPressed(event){
    console.log(event.key)
    key.innerHTML = event.key
}