import { Transaccion } from "./class-trans.js";
class Cuenta{
    id=0;
    saldo = 0;
    movimientos = [];
    contadorTransacciones = 0;
    constructor(name, lastName, email, password){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    /*transferencia(tipo, monto){
        const trans = new Transaccion(tipo, monto);
        if(tipo === "deposito"){
            this.movimientos.push(trans);
            this.contadorTransacciones++;
            trans.id = this.contadorTransacciones;
            this.saldo += monto;
        }
        if(tipo === "retirar" && monto <= this.saldo){
            this.movimientos.push(trans);
            this.contadorTransacciones++;
            trans.id = this.contadorTransacciones;
            this.saldo -= monto;
        }
        if(tipo === "consultar saldo"){
            return this.saldo;
        }
        /*
        if(tipo === "transferir" && monto <= this.saldo){
            this.movimientos.push(trans);
            this.contadorTransacciones++;
            trans.id = this.contadorTransacciones;
            cuenta.saldo += monto;
            this.saldo -= monto;
        }*/
        
    }


export { Cuenta };