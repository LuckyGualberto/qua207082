const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {


const velCondutor = frm.inCodutor.value
const velPermitida = frm.inPermitida.value

console.log(`A velocidade permitida é ${velPermitida}`)

let multa

if (velCondutor <= velPermitida){
    console.log("Sem multa")
}else if((velCondutor > velPermitida) && (velCondutor <= (velPermitida * 0.20))){ 
    console.log ("Multa leve")
}else{
    console.log("Multa grave")
}


})