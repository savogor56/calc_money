import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component {
  
  state = {
    transactios: []
  }

  addTransaction = (description, amount, type) => {
    let id = `cmr${(+new Date).toString(16)}`;
    const transaction = {
      id,
      description,
      amount,
      type
    }
    this.setState(state => ({
      transactios: [...state.transactios, transaction]
    }))
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="container">
            <Total transactions={this.state.transactios} />
            <History transactios={this.state.transactios} />
            <Operation addTransaction={this.addTransaction} />
          </div> 
        </main>
      </>
    )
  }
}

export default App;
