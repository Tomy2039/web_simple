# web_simple
descargue el archivo zip desde este repositorio en github

una vez descargado abre el el visual studio code o otra plataforma para programar

para activar el proyecto tiene que poner en funcionamiento el frontend y el backend

Pasos para el backend:
-en la terminal escriba "cd backend" para redirigirse a la carpeta backend 
-escriba "python app.py" para activar el servidor de python
-para que funcione tiene que mostrar este resultado: 
"* Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server 
instead.
 * Running on http://localhost:4000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 103-063-459"

Pasos para el frontend:
-en la terminal escriba "cd frontend" para redirijirse hacia la carpeta del frontend 
-luego escriba "python -m http.server 8000" para activar un servidor local de python (se recomienda que tenga instalado python en su sistema operativo)
-una vez que activa se mostrara este resultado en la terminal:"Serving HTTP on :: port 8000 (http://[::]:8000/) ..."

Para acceder al proyecto escriba en su navegador "http://localhost:8000"

lo siguiente que se va a mostrar en la interfaz es solamente la caja de texto donde dice "Escribe aqui" para escribir cualquier mensaje y al darle enter saltara un popup con el mensaje escrito

luego esta una pequeño texto que dice "cambiar colores de fondo y texto" es para indicar el boton que dice "cambiar colores" que al presionarlo cambia totalmente los colores del fondo y del texto tanto de la misma pagina como en la caja del texto

