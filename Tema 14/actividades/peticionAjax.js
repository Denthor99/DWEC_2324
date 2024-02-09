// Crearemos la petición Ajax correspondiente para obtener el valor del servidor
function getAjax(){
    let url = '/pagAjax';

    fetch(url)
    .then(res => res.json())
    .then(obj => {
        // Añadimos el contenido al contenedor
        document.getElementById('contenedor').innerHTML = `<p>Hola ${obj.nombre} ${obj.apellidos}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Creamos el addEventListener en el propio window onload
window.onload = function() {
    document.getElementById("botonAjax").addEventListener("click", getAjax);
}
