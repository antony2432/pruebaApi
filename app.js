//* Enviar Formulario
document.getElementById('formulario').addEventListener('submit', function (e) {
    try {
        e.preventDefault();

        const API = 'http://localhost:4000/products'
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;

        let formulario = new URLSearchParams({
            name: name,
            description: description,
            quantity: quantity
        })
        // new FormData(document.getElementById('formulario'));

        fetch(API, {
            method: 'POST',
            body: formulario
        })
            .then(res => res.json())
    } catch (error) {
        console.log(error)
    }
});

//* Limpiar Formulario
document.getElementById('limpiar').addEventListener('click', function () {
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('quantity').value = '';
})


//* Consultar Dato por ID
document.getElementById('buscarId').addEventListener('click', function () {
    const API = 'http://localhost:4000/products';
    const id = document.getElementById('idbuscar').value;
    fetch(`${API}/${id}`)
        .then(response => response.json())
        .then(data => mostrarDatos(data))
        .catch(err => console.log(err))

    const mostrarDatos = (data) => {
        let body = ''
        body = `<tr><td>${data.id}</td><td>${data.Name}</td><td>${data.Description}</td><td>${data.Quantity}</td></tr>`
        document.getElementById('data').innerHTML = body;
    }
})

//* Eliminar con id
document.getElementById('eliminarId').addEventListener('click', function () {
    const API = 'http://localhost:4000/products';
    const id = document.getElementById('idEliminar').value;
    fetch(`${API}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json());
    document.getElementById('res').innerText = 'Se Elimino'
});

//* Total de productos
(async () => {
    try {
        const API = 'http://localhost:4000/products/count';
        const totalProductos = document.getElementById('total');
        fetch(API)
            .then(response => response.json())
            .then(data => mostrar(data))
            .catch(error => console.log(error))

        const mostrar = (data)  => {
            totalProductos.innerText = data;
        }
    } catch (error) {
        console.log(error)
    }
})();

//* Actualizar datos
document.getElementById('formularioUP').addEventListener('submit', function(e) {
    try {
        e.preventDefault();

        const API = 'http://localhost:4000/products';
        const id1 = document.getElementById('idUp').value;
        const name1 = document.getElementById('nameUp').value;
        const description1 = document.getElementById('descriptionUp').value;
        const quantity1 = document.getElementById('quantityUp').value;

        let formulario = new URLSearchParams({
            name: name1,
            description: description1,
            quantity: quantity1
        })
        // new FormData(document.getElementById('formulario'));

        fetch(`${API}/${id1}`, {
            method: 'PUT',
            body: formulario
        })
            .then(res => res.json())
    } catch (error) {
        console.log(error)
    }
})