from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

notes = []

@app.route('/api/notes', methods=['GET'])
def get_notes():
    return jsonify(notes)

@app.route('/api/notes', methods=['POST'])
def save_note():
    data = request.get_json()
    text = data.get('text')
    if text:
        notes.append({"text": text})
        return jsonify({"status": "success", "note": text}), 201
    return jsonify({"status": "fail", "error": "No text provided"}), 400

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Welcome to Notepad API!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)



