const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const frase = frm.inFrase.value.replace(/ /g, "").toUpperCase()
    const resposta= frm.inFrase.value.toUpperCase()
    let pali =""
    for(let i= frase.length-1; i>=0; i--)
         pali += frase[i]
        if(frase == pali){    
        resp.innerText = `${resposta} é um palíndromo`
        }else{
            resp.innerText = `${resposta} não é um palíndromo`
        }
        
})    