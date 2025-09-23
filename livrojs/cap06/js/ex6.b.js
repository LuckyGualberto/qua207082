const frm = document.querySelector("form")
const resp1 = document.querySelector("#numero")
const resp2 = document.querySelector("#texto")
const numeros = []

frm.addEventListener ("submit", (e)=>{
    e.preventDefault()
    const numero = frm.inNumero.value
    if(numeros.includes(numero)== true){
        alert("Número repetido")
        return
    }
    numeros.push(numero)
    resp1.innerText = "Numeros: "+numeros.join(", ")
    frm.inNumero.value =""
    frm.inNumero.focus()
    
})

frm.btVerifica.addEventListener("click", ()=>{
    let ordem = true
    for(let i = 1;i < numeros.length; i++)

        if(numeros[i-1]> numeros [i]){
            ordem = false
            break
        }
        if(ordem){
            resp2.innerText = `Os números estão em ordem crescente`
        }else{
            resp2.innerText= `Ateção... Os números não estão em ordem crescente`
        }
    })
    

   

    
    

   
    









/*if(b.numero <= a.numero){
        resp2.innertext = `<p style = "font-family: italic, Arial; color: blue;"> Atenção ... Números não estão em ordem crescente</p>`
    }else{
        resp2.innerText = `Números em ordem crescente`
    }  
      
    





    const copia = [... numeros]

    copia.sort((a,b) => a.numero - b.numero) 

    let resumo = ""

    let aux = copia[0].numero

    let resposta =+ copia
    
    
    
    
    
    
    */