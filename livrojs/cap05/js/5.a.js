const frm = document.querySelector ("form")
const resp = document.querySelector ("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    for(let etiqueta = 1; etiqueta <= num; etiqueta++){
        resp.innerText += `${fruta.padEnd(8,'*')} ` 
    }
    



})



/*
const produto = prompt("produto: ")
const num = Number(prompt("N º de Etiquetas: "))
// Cria um laço de repetição até num/2
for(let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if(num % 2 == 1){ // se quantidade de etiquetas for ímpar
    console.log(produto) // imprime mais uma etiqueta
}

*/