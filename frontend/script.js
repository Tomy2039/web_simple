// Capturar el evento "Enter" en el input para enviar el mensaje
const inputMensaje = document.getElementById("mensaje")
inputMensaje.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        let mensaje = this.value.trim();
        if (mensaje !== "") {
            console.log("Enviando mensaje:", mensaje);  

            fetch('http://localhost:4000/mensaje', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mensaje: mensaje })
            })
            .then(response => {
                console.log("Respuesta recibida:", response);
                return response.json();
            })
            .then(data => {
                console.log("Mensaje del servidor:", data);
                alert("Mensaje: " + data.mensaje);
            })
            .catch(error => console.error("Error en fetch:", error));
        }
    }
});


// Configuración de los colores
let colores = [
    { fondo: "white", texto: "black", inputFondo: "white", inputTexto: "black" },
    { fondo: "black", texto: "white", inputFondo: "black", inputTexto: "white" },
    { fondo: "lightblue", texto: "red", inputFondo: "lightblue", inputTexto: "red" }
];

let indice = 0;

// Función para cambiar los colores de fondo y texto
document.getElementById("btnColor").addEventListener("click", function() {
    let colorActual = colores[indice];
    document.body.style.backgroundColor = colorActual.fondo;
    document.body.style.color = colorActual.texto;

    inputMensaje.style.backgroundColor = colorActual.inputFondo;
    inputMensaje.style.color = colorActual.inputTexto;
    
    indice = (indice + 1) % colores.length;
});

document.getElementById()

