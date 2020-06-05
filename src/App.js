import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';


function App() {
  const [timestamp, setTimestamp] = useState('')
  useEffect(() => {
    subscribeToTimer((err, timestamp) => setTimestamp(timestamp));
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>socket.io-client</code>.
        </p>
        <span>{timestamp}</span>
      </header>
    </div>
  );
}

export default App;
