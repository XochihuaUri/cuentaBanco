import { fillData } from "./rellenar-info.js";
import { createRow } from "./create-tr.js";

const btnDepositar = document.getElementById("dep-btn")
const btnRetirar = document.getElementById("ret-btn")
const btnConsultar = document.getElementById("cons-btn")
const btnTransferir = document.getElementById("trans-btn")
const btnLogOut = document.getElementById("logOut")

const cuentaActual = localStorage.getItem("actual")
const account = JSON.parse(localStorage.getItem("cuentas"))
const cuenta = account[cuentaActual]
const consulta = document.getElementById("saldoActual")

console.log(account)

fillData(cuenta.name,cuenta.lastName,cuenta.email,cuenta.saldo)
refreshTable()

btnDepositar.addEventListener("click", ()=>{
    consulta.innerText = ""
    const monto = parseInt(document.getElementById("monto").value);
    document.getElementById("monto").value = "";

    if(!isNaN(monto)){
        cuenta.saldo += monto;
        cuenta.id++;
        cuenta.movimientos.push({
            "id": cuenta.id,
            "tipo": "deposito",
            "monto": monto
        })
        console.log(account)
        console.log(cuenta)
        localStorage.setItem("cuentas",JSON.stringify(account));
        //console.log(cuenta.movimientos)
        fillData(cuenta.name,cuenta.lastName,cuenta.email,cuenta.saldo)
        refreshTable()
        
        //localStorage.setItem("cuentas")
    }

    
})

btnRetirar.addEventListener("click", ()=>{
    consulta.innerText = ""
    const monto = parseInt(document.getElementById("monto").value);
    document.getElementById("monto").value = "";
    if(!isNaN(monto)){
        if(monto <= cuenta.saldo){
            cuenta.saldo -= monto;
            cuenta.id++;
            cuenta.movimientos.push({
                "id": cuenta.id,
                "tipo": "retiro",
                "monto": monto
            })
            console.log(account)
            console.log(cuenta)
            localStorage.setItem("cuentas",JSON.stringify(account));

            fillData(cuenta.name,cuenta.lastName,cuenta.email,cuenta.saldo)
            refreshTable()
        }
        
        
    }

    
})

btnConsultar.addEventListener("click", ()=>{
    consulta.innerText = `Su saldo es de: $${cuenta.saldo}`
})

btnTransferir.addEventListener("click", ()=>{
    alert("klk")
})


btnLogOut.addEventListener("click",()=>{
    localStorage.setItem("actual", "");
    window.location.href = "index.html";
})

function refreshTable(){
    const table = document.getElementById("tbody")
    table.innerHTML= ""
    for(let i = 0 ; i < cuenta.movimientos.length; i++){
        createRow(cuenta.movimientos[i].id, cuenta.movimientos[i].tipo, cuenta.movimientos[i].monto)
    }
}


/*
yo.transferencia("deposito", 200)
console.log(yo.transferencia("consultar saldo", 0))
yo.transferencia("retirar", 200)
console.log(yo.movimientos)
console.log(yo.saldo)
*/