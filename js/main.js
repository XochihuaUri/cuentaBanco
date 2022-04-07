import { Cuenta } from "./class-cuenta.js";
import { createUser } from "./create-user.js";



/*
yo.transferencia("deposito", 200)
console.log(yo.transferencia("consultar saldo", 0))
yo.transferencia("retirar", 200)
console.log(yo.movimientos)
console.log(yo.saldo)

fillData(yo.name, yo.lastName, yo.email, yo.saldo)

for(let i = 0 ; i < yo.movimientos.length; i++){
    createRow(yo.movimientos[i].id, yo.movimientos[i].tipo, yo.movimientos[i].monto)
}*/
const btnLogin = document.getElementById("login_btn")
const btnSign = document.getElementById("btn__sign")

let arrayCuentas =[]
let userTrue = false;
localStorage.setItem("actual", "")
const account = JSON.parse(localStorage.getItem("cuentas"))


btnLogin.addEventListener("click", function(){
    const usuario = document.getElementById("user").value
    const contrasena = document.getElementById("password").value
    document.getElementById("user").value = ""
    document.getElementById("password").value = ""

    for(let i = 0; i < account.length; i++){
        if(usuario == account[i].email && contrasena == account[i].password){
            userTrue = true;
            localStorage.setItem("actual", i)
            //localStorage.setItem("cuentas", JSON.stringify(acc))
        }
        if(userTrue){
            window.location.href = "client.html";
        }
    }
    
    
})
btnSign.addEventListener("click", function(){
    const nombre = document.getElementById("name").value
    const apellido = document.getElementById("lastName").value
    const email = document.getElementById("userSign").value
    const contrasena = document.getElementById("passwordSign").value

    const newUser = createUser(nombre, apellido, email, contrasena)
    account.push(newUser)
    localStorage.setItem("cuentas", JSON.stringify(account))

})