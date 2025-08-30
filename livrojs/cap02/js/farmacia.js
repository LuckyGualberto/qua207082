const frm = document.querySelector("form");
const outPromocao = document.querySelector("h3");

frm.addEventListener('submit', (e) =>{
    
    const medicamento = frm.inMedicamento.value;
    const promocao = Math.floor(frm.inPreco.value) * 2;

    outPromocao.innerHTML = `Promoção de ${medicamento}<br>Leve dois por R$ ${promocao}`;

    e.preventDefault(); 
})
