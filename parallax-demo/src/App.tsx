// src/App.tsx
import React from 'react';
import Parallax from './components/Parallax';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax />

      <section className="after-parallax">
        <div className="content-wrapper">
          <h1>RENEGADES FC</h1>
          <p>Journey : From streets to stadium.</p>
          <button>Register now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
