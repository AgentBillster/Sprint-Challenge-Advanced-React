import React from 'react';
import './App.css';
import Fetch from './components/fetch';
import Navbar from './components/navbar'

function App() {
  return (
    <div className="people">
      <Navbar />
     <Fetch />
    </div>
  );
}

export default App;
