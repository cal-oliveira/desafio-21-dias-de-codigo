let timer = document.getElementById('timer')
let playBtn = document.getElementById('playBtn')
let pauseBtn = document.getElementById('pauseBtn')
let stopBtn = document.getElementById('stopBtn')

let seconds = 0
let minuts = 0

let sec
let min 

playBtn.addEventListener('click',()=>{

    if(seconds === 0){

        playBtn.classList.add('btn-pressed-purple')
        
        sec = setInterval(()=>{
            seconds++
            timer.innerHTML = (minuts < 10 ? '0' + minuts : minuts) + ':' + (seconds < 10 ? '0' + seconds : seconds < 60 ? seconds : seconds = 0)
        },1000)

        min = setInterval(()=>{
            minuts++
            timer.innerHTML = (minuts < 10 ? '0' + minuts : minuts) + ':' + (seconds < 10 ? '0' + seconds : seconds < 60 ? seconds : seconds = 0)
        },60000)
        

    } else {
        if(pauseBtn.classList.contains('btn-pressed-orange')){

            playBtn.classList.add('btn-pressed-purple')
            pauseBtn.classList.remove('btn-pressed-orange')
            
            sec = setInterval(()=>{
                seconds++
                timer.innerHTML = (minuts < 10 ? '0' + minuts : minuts) + ':' + (seconds < 10 ? '0' + seconds : seconds < 60 ? seconds : seconds = 0)
            },1000)

            min = setInterval(()=>{
                minuts++
                timer.innerHTML = (minuts < 10 ? '0' + minuts : minuts) + ':' + (seconds < 10 ? '0' + seconds : seconds < 60 ? seconds : seconds = 0)
            },60000)

        } else {
            return
        }
        
    }

})

pauseBtn.addEventListener('click',()=>{

    if(seconds === 0){
        return
    }

    clearInterval(sec)
    clearInterval(min)
    pauseBtn.classList.add('btn-pressed-orange')
    playBtn.classList.remove('btn-pressed-purple')
})

stopBtn.addEventListener('click',()=>{

    clearInterval(sec)
    clearInterval(min)
    playBtn.classList.remove('btn-pressed-purple')
    pauseBtn.classList.remove('btn-pressed-orange')
    seconds = 0
    minuts = 0
    timer.innerHTML = '00:00'

})