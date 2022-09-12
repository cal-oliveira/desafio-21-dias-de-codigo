let gallery = document.querySelector('.gallery')
let random_images = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&query=dark`

let getImages = () => {
    fetch(random_images)
    .then(res => res.json())
    .then(data => {

        let imgTag = document.createElement('img')
        imgTag.src = data.urls.regular
        imgTag.className = 'gallery-img'

        gallery.appendChild(imgTag)
    })
}

setInterval(()=>{
    let dateNow = new Date
    let hour = document.querySelector('.hour').innerHTML = `${dateNow.getHours()}:${dateNow.getMinutes()}`
    let date = document.querySelector('.date').innerHTML = `${dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate()}
    /${dateNow.getMonth() < 10 ? '0' + (dateNow.getMonth()+1) : (dateNow.getMonth()+1)}/${dateNow.getFullYear()}`
    },1000)

let makeImages = (data) => {
    data.forEach((item,index)=>{
        console.log(item)

        let img = document.createElement('img')
        img.src = item.urls.regular
        img.className = 'gallery-img'

        gallery.appendChild(img)
    })
}

getImages()
