let timer = document.getElementById('timer')
let playBtn = document.getElementById('playBtn')
let pauseBtn = document.getElementById('pauseBtn')
let stopBtn = document.getElementById('stopBtn')

let hh = 00
let mm = 00
let ss = 00

let cronometerValue = 0

let clock


playBtn.addEventListener('click',()=>{

    if(cronometerValue === 0){

        playBtn.classList.add('btn-pressed-purple')
        
        clock =  setInterval(()=>{
            cronometerValue++
            timer.innerHTML = cronometerValue
        },1000)
        

    } else {
        if(pauseBtn.classList.contains('btn-pressed-orange')){

            playBtn.classList.add('btn-pressed-purple')
            pauseBtn.classList.remove('btn-pressed-orange')
            
            clock =  setInterval(()=>{
                cronometerValue++
                timer.innerHTML = cronometerValue
            },1000)

        } else {
            return
        }
        
    }

})

pauseBtn.addEventListener('click',()=>{
    clearInterval(clock)
    pauseBtn.classList.add('btn-pressed-orange')
    playBtn.classList.remove('btn-pressed-purple')
})

stopBtn.addEventListener('click',()=>{

    clearInterval(clock)
    playBtn.classList.remove('btn-pressed-purple')
    pauseBtn.classList.remove('btn-pressed-orange')
    cronometerValue = 0
    timer.innerHTML = 0

})