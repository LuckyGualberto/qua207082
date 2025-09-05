//ler tres lados
//um dos lados nao pode ser maior que a soma dos dois
//Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes)

const frm = document.querySelector("form")
const resp1 = document.querySelector("#Lados")
const resp2 = document.querySelector("#Tipo")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const lado1 = Number(frm.LadoA.value)
    const lado2 = Number (frm.LadoB.value)
    const lado3 = Number (frm.LadoC.value)
    

    if (lado1 > lado2 + lado3 || lado2 > lado1+lado3 || lado3> lado1+lado2){
        resp1.innerText = `Não pode formar o trângulo`
    }else if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = `Tipo: Equilátero`
    }else if(lado1 == lado2 && lado1 == lado3 && lado2 != lado3){
         resp1.innerText = `Lados podem formar um triângulo`
         resp2.innerText = `Tipo: Isósceles`
    }else if(lado1 != lado2 && lado1 == lado3 && lado2 == lado3){
         resp1.innerText = `Lados podem formar um triângulo`
         resp2.innerText = `Tipo: Isósceles`
    }else if(lado1 == lado2 && lado1 != lado3 && lado2 == lado3){
         resp1.innerText = `Lados podem formar um triângulo`
         resp2.innerText = `Tipo: Isósceles`
    }else {
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = `Tipo: Escaleno`
    }


    
})









