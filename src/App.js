import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component {
  
  state = {
    transactions: [
      {
      id: 'test1',
      description: 'Зарплата',
      amount: 30000,
      type: 'add'
      },
      {
      id: 'test2',
      description: 'Пивасик',
      amount: 1000,
      type: 'cost'
      }
    ]
  }

  addTransaction = (description, amount, type) => {
    let date = new Date();
    let id = `cmr${(+date).toString(16)}`;
    const transaction = {
      id,
      description,
      amount,
      type
    }
    this.setState(state => ({
      transactions: [...state.transactions, transaction]
    }))
  }

  getCosts = (transactions) => {
    return transactions.reduce((sum, item) => (
        item.type === 'cost' ? sum + +item.amount : sum
      ), 0)
  }

  getIncome = (transactions) => {
    return transactions.reduce((sum, item) => (
        item.type === 'add' ? sum + +item.amount : sum  
      ), 0)
  }

  deleteTransaction = (id) => {
    this.setState({
      transactions: this.state.transactions.filter((item) => item.id !== id)
    })
  }

  render() {
    

    return (
      <>
        <Header />
        <main>
          <div className="container">
            <Total cost={this.getCosts(this.state.transactions)} income={this.getIncome(this.state.transactions)} />
            <History transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}/>
            <Operation addTransaction={this.addTransaction} />
          </div> 
        </main>
      </>
    )
  }
}

export default App;
