const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = localStorage.getItem("filtro") == null? "": localStorage.getItem("filtro")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const item = frm.inItem.value
    const status = frm.inStatus.value
    const index = frm.inIndex.value
    const lineNumber = frm.lineNumber.value
    // incluir ou atualizar 
    index == "" ? incluir({item,status}): atualizar(lineNumber,{item,status}, index)
    

})

function prepararEdicao(index){
    frm.inItem.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status
    frm.inIndex.value = index
     frm.linenumber.value = lsItem[index]._lineNumber
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", ()=>{
    const index = frm.inIndex.value
    if(confirm("Deseja realmente apagar esse item?") == false){
        return
    }
    const lineNumber = frm.lineNumber.value
    deleteRow(lineNumber).then(()=>{
        lsItem.splice(index,1)
    atualizarTabela()
    })
    
})

function atualizarTabela(){
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    tbody.innerHTML =""
    let cont = 0
    for(i of lsItem){
        if(filtro ==""|| filtro.includes(i.status)){
        tbody.innerHTML += `<tr onclick="prepararEdicao(${cont})"><td>${i.item}</td><td>${i.status}</td></tr> `
        }
        cont ++
    }  
    
}

function limpar(){
    frm.inItem.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.lineNumber.value = ""
    frm.btApagar.disabled = true
}

if(localStorage.getItem("lsItem")!=null){
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}


const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
for(const bt of lsFiltro){
    bt.addEventListener("click", filtrar)
    if(filtro.includes(bt.value)){
        bt.checked = true
    }
}


function filtrar(){
    filtro = ""
    for(const bt of lsFiltro){
        filtro += bt.checked ? bt.value+",":""
    }    
    atualizarTabela()
    localStorage.setItem("filtro",filtro)

}

async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/lds");
    const data = await response.json();

    // will return an array of objects with the _lineNumber
    return data;
}

getData().then( (ls) =>{
    lsItem = ls
    atualizarTabela()
} )

async function createRow(payload) {
    /* Payload should be an object with the columns you want to create, example:
    const payload = {
        column1: "foo",
        column2: "bar"
    };
    */
    const response = await fetch("https://api.zerosheets.com/v1/lds", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const data = await response.json()
    return data;
}


function incluir(obj){
    createRow(obj).then((o)=>{
        lsItem.push(o)
        atualizarTabela()
    })
}

async function patchRow(lineNumber, payload) {
    /* Payload should be an object with the columns you want to update, example:

    const payload = {
        foo: "bar"
    };
    */
    const url = "https://api.zerosheets.com/v1/lds/" + lineNumber;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    
    // will return an object of the new row plus the _lineNumber
    return data;
}

function atualizar(lineNumber, obj, index){
    patchRow(lineNumber,obj).then((o)=>{
        lsItem[index]=o
        atualizarTabela()
    })
}

async function deleteRow(lineNumber) {
    const url = "https://api.zerosheets.com/v1/lds/" + lineNumber; // lineNumber comes from the get request
    await fetch(url, {
        method: "DELETE"
    });
    // No response data is returned
}