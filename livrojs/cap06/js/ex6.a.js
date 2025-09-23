const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const times = []

frm.addEventListener ("submit", (e)=>{
    e.preventDefault()
    const time = frm.inTime.value
    times.push(time)
    let lista = ""
    for(let i = 0;i < times.length; i++){
        lista += ` ${times[i]}\n`
    }
    frm.inTime.value = ""
})

frm.btListar.addEventListener("click", ()=>{
    const time = frm.inTime.value
    times.push(time)
    let lista = ""
    for(let i = 0;i < times.length; i++){
        lista += ` ${times[i]}\n`
    }
    frm.inTime.value = ""
    resp.innerText = lista 
    frm.inTime.focus()
    return
})

frm.btListar.dispatchEvent(new Event("click"))



frm.btMontar.addEventListener("click", ()=>{

    if(times.length%2 == 1){
        alert("Deve ser uma quantidade par de clubes")
        return
    }
    resp.innerText=""
    for(let i = 0; i < times.length/2; i++){        
       resp.innerText += ` ${times[i]} x ${times[times.length-i-1]}\n`
    }

    
})