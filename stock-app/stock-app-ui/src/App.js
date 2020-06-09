import React, { Component } from 'react';
import './App.css';
import InvestorComponent from './component/InvestorComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <InvestorComponent />
      </div>
    );
  }
}

export default App;
