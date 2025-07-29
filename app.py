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
    notes.append(data['text'])
    return jsonify({"message": "Note added successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
