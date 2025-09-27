const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const frase = frm.inFrase.value.replace(/ /g, "")
    const resposta= frm.inFrase.value
    let pal =""
    for(let i= frase.length-1; i>=0; i--)
         pal += frase[i]
        if(frase == pal){    
        resp.innerText = `${resposta.toUpperCase()} é um palíndromo`
        }else{
            resp.innerText = `${resposta} não é um palíndromo`
        }
        
})    