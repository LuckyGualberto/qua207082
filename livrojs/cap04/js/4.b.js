const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=> {
    e.preventDefault()


const velPermitida = frm.inPermitida.value ;   
const velCondutor = frm.inCondutor.value;




if (velCondutor <= velPermitida){
    resp.innerText = "Sem multa"
}if((velCondutor > velPermitida) && (velCondutor <= (velPermitida * 0.20))){ 
   resp.innerText = `Multa leve`
}else{
    resp.innerText = `Multa grave`
}


})





/*    
const velPermitida = Number(frm.inPermitida.value) ;   
const velCondutor = Number(frm.inCondutor.value);

let multa = frm.inPermitida.value && frm.inCondutor.value

if (velCondutor <= velPermitida){
    multa.innerText = `Sem multa`
}else if((velCondutor > velPermitida) && (velCondutor <= (velPermitida * 0.20))){ 
   multa.innerText = `Multa leve`
}else{
    multa.innerText = `Multa grave`
}


})     */