function fillData(name, lastName, email, saldo){
    const nombre = document.getElementById("name__client-page")
    const apellido = document.getElementById("lastName__client-page")
    const mail = document.getElementById("email__client-page")
    const balance = document.getElementById("saldo__client")

    nombre.innerText = `Nombre: ${name}`;
    apellido.innerText =`Apellidos: ${lastName}`;
    mail.innerText = `E-mail: ${email}`;
    balance.innerText =`$${saldo}`;
}
export { fillData }