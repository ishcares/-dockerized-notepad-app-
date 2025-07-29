from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

notes = []

@app.route('/api/notes', methods=['GET'])
def get_notes():
    return jsonify(notes)

@app.route('/api/notes', methods=['POST'])
def add_note():
    data = request.get_json()
    note = {'text': data['text']}
    notes.append(note)
    return jsonify({'message': 'Note added'}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
