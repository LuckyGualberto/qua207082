const frm = document.querySelector("form")
const resp = document.querySelector("h3")
// exibir as letras na posição par
// exibir as letras na posição impar
// descriptografar
frm.addEventListener("submit", (e)=>{
    const palavra = frm.inMensagem.value
    const tam = palavra.length
    let par = palavra.charAt(tam) 
    for(let i = 0; i %2==0; i++){
       if(palavra[i.length] % 2 == 0){
            par += tam.charAt(i)
       }else{

       }
    }
})