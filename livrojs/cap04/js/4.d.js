//ler tres lados
//um dos lados nao pode ser maior que a soma dos dois
//Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes)

const frm = document.querySelector("frm")
const resp1 = document.querySelector("Lados")
const resp2 = document.querySelector("Tipo")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const lado1 = frm.Lado1.value
    const lado2 = frm.Lado2.value
    const lado3 = frm.Lado3.value
    

    if (lado1 > lado2 + lado3 || lado2 > lado1+lado3 || lado3> lado1+lado2){
        resp1.innerText = `Não pode formar o trângulo`
    }else if(lado1 == lado){

    }    


    






})



/*  if((lado1> lado2) || (lado2 > lado3) || (lado3 > lado1) || (lado1 > lado3) || (lado2>lado1) || (lado3>lado2)){
        resp1.innerText = `Não pode formar o trângulo`
    }else if(){

    }*/