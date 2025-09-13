const frm = document.querySelector ("form")
const resp1 = document.querySelector ("#divisores")
const resp2 = document.querySelector("#resultado")




frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
   // let soma = ""
    
    let numDivisores = `Divisores do ${numero}: 1` 
    let soma =1
    
   for(let i = 2; i <= numero/2; i++){ // percorre todos os possíveis divisores nde numer
        if(numero % i == 0){
            soma += i
            numDivisores += "," +i 
        }
        
   }
   resp1.innerText = `${numDivisores} (Soma: ${soma})`
   if(soma == numero){
    resp2.innerText = `O ${numero} é perfeito`
   }else{
    resp1.innerText = `O ${numero} não é perfeito`
   }
})


/*
inserir um número
a soma de todos os divisores que são igual a 0 dão o número inserido.
se entrar nessas condições é um número perfeito
*/