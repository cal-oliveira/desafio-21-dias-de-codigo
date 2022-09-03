let link = 'https://economia.awesomeapi.com.br/json/last/usd'

let usdValue = document.getElementById('usd-value')
let brlValue = document.getElementById('brl-value')

fetch(link)
.then(response => {
    return response.json()
}
).then(data => {
    let usd = parseFloat(data.USDBRL.ask)
    let dolar = usd.toFixed(2)
    usdValue.value = 1
    brlValue.value = dolar

    usdValue.addEventListener('change',()=>{
        brlValue.value = `${(dolar*usdValue.value).toFixed(2)}`
    })

    brlValue.addEventListener('change',()=>{
        usdValue.value = `${(brlValue.value/dolar).toFixed(2)}`
    })

})

