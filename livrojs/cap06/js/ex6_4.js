const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [] // declara vetor global
//inclui alguns criancas fixos
criancas.push({nome:"Lucas", idade:4})
criancas.push({nome:"Ana", idade:3})
criancas.push({nome:"Bianca", idade:6})
criancas.push({nome:"Pedro", idade:6})
criancas.push({nome:"João", idade:4})
criancas.push({nome:"Maria", idade:4})
criancas.push({nome:"Juliana", idade:3})
criancas.push({nome:"Cátia", idade:6})

frm.btListar.addEventListener("click",()=>{
    if(criancas.length == 0){
        alert("Não há criancas na lista")
        return
    }
    // método reduce() concatena uma string, obtendo nome e idade de cada criança
    const lista = criancas.reduce((acumulador,crianca) =>
        acumulador + crianca.nome + `-R$: ${crianca.idade}\n`,"")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})
// dispara o evento de click btListar (Equivale a um click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({nome,idade}) // adiciona dados ao vetor de objetos
    //limpar os campos do form
    frm.inNome.value =""
    frm.inIdade.value =""
    frm.inNome.focus()
    //atualiza a lista dos criancas na tela
    frm.btListar.dispatchEvent(new Event("click"))
})