document.addEventListener('DOMContentLoaded', () => {
    const formAltaIngrediente = document.getElementById('form-alta-ingrediente');
    const stockList = document.getElementById('stock-list');


    formAltaIngrediente.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombreIngrediente = document.getElementById('nombre-ingrediente').value;
        const fabricante = document.getElementById('fabricante').value;
        const unidadMedida = document.getElementById('unidad-medida').value;
        const cantidad = document.getElementById('cantidad').value;
        const fechaCaducidad = document.getElementById('fecha-caducidad').value;


        const tr = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdFabricante = document.createElement('td');
        const tdUnidad = document.createElement('td');
        const tdCantidad = document.createElement('td');
        const tdFecha = document.createElement('td');


        tdNombre.textContent = nombreIngrediente;
        tdFabricante.textContent = fabricante;
        tdUnidad.textContent = unidadMedida;
        tdCantidad.textContent = cantidad;
        tdFecha.textContent = fechaCaducidad;


        tr.appendChild(tdNombre);
        tr.appendChild(tdFabricante);
        tr.appendChild(tdUnidad);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdFecha);


        stockList.appendChild(tr);


        formAltaIngrediente.reset();
    });
});