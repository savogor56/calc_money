import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Total />
          <History />
          <Operation />
        </div> 
      </main>
    </div>
  );
}

export default App;
