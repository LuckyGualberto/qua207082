const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const nome = frm.inNome.value
const idade = frm.inIdade.value

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    resp.innerText = `${nome}`
})

function retornarTracos(){
    tracos = ""
    let i
}

