import React, { useState, useEffect } from 'react';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [helloMsg, setHelloMsg] = useState('');

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
console.log("Backend URL:", BACKEND_URL);
 // Use Docker service name

  // Fetch welcome message
  const fetchHello = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/`);
      const data = await res.json();
      setHelloMsg(data.message);
    } catch (err) {
      console.error("Error fetching hello message:", err);
    }
  };

  // Fetch all notes from backend
  const fetchNotes = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/notes`);
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  // Send new note to backend
  const saveNote = async () => {
    if (!note.trim()) return;
    try {
      await fetch(`${BACKEND_URL}/api/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: note })
      });
      setNote('');
      fetchNotes();
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  useEffect(() => {
  
    fetchHello();
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Notepad</h2>
      <p style={{ fontStyle: 'italic', color: 'gray' }}>{helloMsg}</p>
      <textarea
        rows="5"
        cols="50"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note..."
      />
      <br />
      <button onClick={saveNote}>Save Note</button>
      <h3>Saved Notes:</h3>
      <ul>
        {notes.map((n, idx) => (
          <li key={idx}>{n.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

