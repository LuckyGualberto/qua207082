const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() 
    const numero = Number(frm.inNumero.value)
    let primo = true // flag
    // percorre os possíveis divisores impares iniciado do 3 até a metade do número
    for(let i = 3; i <= numero /2; i = i + 2){ // percorre todos os possíveis divisores nde numero
        if (numero % i == 0 ){ // verifica se i (3,5,7 ...) é divisor do numero
            primo = false // mudar a flag
            break // sair do loop
        }
    } 
    if((numero <= 3 || numero % 2 != 0)&& primo){
        resp.innerText = `${numero} é primo`
    }else{
        resp.innerText = `${numero} NÂO é primo`
    }
})    