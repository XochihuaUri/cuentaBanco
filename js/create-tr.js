function createRow(id, tipo, cantidad){
    const table = document.getElementById("tbody")
    const row = document.createElement("tr")
    const content = `
    <th scope="row">${id}</th>
    <td>${tipo}</td>
    <td>${cantidad}</td>
    `
    row.innerHTML = content;
    table.appendChild(row)
}

export { createRow };
