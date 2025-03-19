from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 

@app.route('/mensaje', methods=['POST'])
def recibir_mensaje():
    data = request.get_json()
    mensaje = data.get('mensaje', '')  
    print("Mensaje recibido:", mensaje)  
    return jsonify({'mensaje': mensaje})  

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
