const frm = document.querySelector ("form")
const resp = document.querySelector ("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const ano = Number(frm.inAno.value)


    let resposta = ""
    for (let i = 1; i <= ano; i++){
        resposta =  resposta + `${i}º ano: ${numero  * (3 ** (i-1))}  \n`  
    }
    resp.innerText = resposta
})
// primeiro caso pegar o número de chinchilas
// depois pegar o número de anos
// a cada ano o número de chinchilas triplica
// mostrar o número final de chinchilas
// ano tem 3 chinchilas
// no segundo ano tem 9 chinchilas  
// no terceiro ano tem 27 chinchilas