const frm = document.querySelector("form")
const resp1 = document.querySelector("#Tempo")
const resp2 = document.querySelector("#Troco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    

    const locacao = Number(frm.inValor.value)
    const troco1 = locacao- 1.00
    const troco2 = locacao - 1.75
    const troco3 = locacao - 3.00
    
    if (locacao <= 1.00) {
    resp1.innerText = `Valor insuficiente`
    }else if (locacao <=1.74){
    resp1.innerText = `Tempo: 30 min`
    resp2.innerText = `Troco R$: ${troco1}`
    }else if(locacao <=2.99){
    resp1.innerText = `Tempo: 60 min`
    resp2.innerText = `Troco R$: ${troco2}`
    }else{
    resp1.innerText = `Tempo: 120 min`
    resp2.innerText = `Troco R$: ${troco3}`
}
 })