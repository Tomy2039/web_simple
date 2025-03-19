// Capturar el evento "Enter" en el input para enviar el mensaje
document.getElementById("mensaje").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        let mensaje = this.value;
        if (mensaje.trim() !== "") {
            fetch('http://127.0.0.1:5000/mensaje', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mensaje: mensaje })
            })
            .then(response => response.json())
            .then(data => alert("Mensaje: " + data.mensaje))
            .catch(error => console.error("Error:", error));
        }
    }
});

// Configuración de los colores
let colores = [
    { fondo: "white", texto: "black" },
    { fondo: "black", texto: "white" },
    { fondo: "lightblue", texto: "red" }
];

let indice = 0;

// Función para cambiar los colores de fondo y texto
document.getElementById("btnColor").addEventListener("click", function() {
    let colorActual = colores[indice];
    document.body.style.backgroundColor = colorActual.fondo;
    document.body.style.color = colorActual.texto;

    indice = (indice + 1) % colores.length;
});
