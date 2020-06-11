import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// GitHub stockNames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
  <div>
    {props.searchResults.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Country</th>
                <th>Stock Name</th>
              </tr>
            </thead>
            <tbody>
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.country}</td>
                <td>{profile.stockName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    country: '',
    stockName: ''
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post('http://localhost:8080/depository/github/data01', {
      country: `USA`,
      stockName: `${this.state.stockName}`
    })
      .then((response) => {
        console.log(response.data);
        this.props.onSubmit(response.data);
      }, (error) => {
        console.log(error);
      });

    this.setState({ stockName: '' });
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.stockName}
          onChange={event => this.setState({ stockName: event.target.value })}
          placeholder="GitHub stockName"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    searchResults: [],
  };
  addSearchResult = (searchData) => {
    this.setState(prevState => ({
      searchResults: [searchData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addSearchResult} />
        <CardList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
