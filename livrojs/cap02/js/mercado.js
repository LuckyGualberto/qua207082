const frm = document.querySelector("form");
const outPromocao = document.querySelector("h3");

frm.addEventListener('submit', (e)=>{

    e.preventDefault();

    const produto = frm.inProduto.value;
    const preco = frm.inPreco.value;
    const promocao = (preco * 2) + (preco * 0.5);

    outPromocao.innerHTML = `${produto} - Promoção : Leve três por ${promocao.toFixed(2)}<br>`;
    outPromocao.innerHTML += ` O terceiro produto sai por ${(preco * 0.5).toFixed(2)}`;
})