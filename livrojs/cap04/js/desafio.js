const secreto = Math.round(Math.random()*100)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
let click = 0




frm.addEventListener("submit", (e) => {
    
    e.preventDefault(); 

    const numero = frm.inNumero.value
    
    click++

    if (numero > secreto){
        resp.innerText = `O número secreto é menor`     
    }if (numero < secreto){
        resp.innerText = `O número secreto é maior` 
    }else {
        resp.innerText = `Parabéns, você acertou com ${click} tentativas`
    
    }


})