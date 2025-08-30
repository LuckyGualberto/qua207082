const frm = document.querySelector("form");
const outPromocao = document.querySelector("h3");

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const valor = frm.inValor.value;
    const tempo = frm.inTempo.value;

    const total = Math.ceil(tempo / 15) * valor ;

    outPromocao.innerHTML = `Valor a pagar: R$ ${total.toFixed(2)}`;

    
})