from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/mensaje', methods=['POST'])
def recibir_mensaje():
    data = request.json
    mensaje = data.get('mensaje', '')
    return jsonify({'mensaje': mensaje})

if __name__ == '__main__':
    app.run(debug=True)