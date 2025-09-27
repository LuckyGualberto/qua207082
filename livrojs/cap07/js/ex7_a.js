const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// exibir as letras na posição par
// exibir as letras na posição impar
// descriptografar
frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const palavra = frm.inMensagem.value.trim()
    const tam = palavra.length
    let par = "" 
    let impar = ""
    for(let i = 0; i < tam ; i++){
       if(i % 2 == 0){
            par += palavra[i+1]
       }else{
            impar += palavra[i+1]
       }
    }
    resp.innerText= `${par} ${impar}`
})

 frm.btDescri.addEventListener("click", ()=>{
    const palavra = frm.inMensagem.value
    resp.innerText = `${palavra}`
 })