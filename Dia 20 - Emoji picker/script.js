let message = document.getElementById('message')

document.querySelector('emoji-picker').addEventListener('emoji-click',event => {
    navigator.clipboard.writeText(event.detail.unicode)

    let node = document.createElement('h2')
    let text = document.createTextNode('Copiado!')
    node.appendChild(text)
    message.appendChild(node)

    setTimeout(()=>{
        message.removeChild(message.children[0])
    },1500)

})
