import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component {  
  state = {
    transactions: JSON.parse(localStorage.getItem('calcMoney')) || []
  }

  componentDidMount() {
    this.calculateBalance();
    this.addStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.transactions.length !== this.state.transactions.length) {
      this.calculateBalance();
    }
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

  getCosts = () => {
    return this.state.transactions.reduce((sum, item) => (
        item.type === 'cost' ? sum + +item.amount : sum
      ), 0)
  }

  getIncome = () => {
    return this.state.transactions.reduce((sum, item) => (
        item.type === 'add' ? sum + +item.amount : sum  
      ), 0)
  }

  calculateBalance() {
    this.setState({
      ...this.state,
      cost: this.getCosts(),
      income: this.getIncome()
    })
  }

  deleteTransaction = id => {
    this.setState({
      transactions: this.state.transactions.filter((item) => item.id !== id)
    })
  }

  addStorage() {
    localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions));
  }

  render() {
    this.addStorage();
    return (
      <>
        <Header />
        <main>
          <div className="container">
            <Total cost={this.state.cost} income={this.state.income} />
            <History transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}/>
            <Operation addTransaction={this.addTransaction} />
          </div> 
        </main>
      </>
    )
  }
}

export default App;
