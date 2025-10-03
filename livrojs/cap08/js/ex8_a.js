const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = frm.inIdade.value
    resp.innerText = `${nome}`
})

function retornarTracos(){
    
}

