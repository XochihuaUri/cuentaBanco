import { Cuenta } from "./class-cuenta.js";

function createUser(name, lastName, email, password){
    const user = new Cuenta(name, lastName, email, password);
    return user;
}

export {createUser};