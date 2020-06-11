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
    const resp = await axios.post('http://localhost:8080/depository/github/data', {
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



const TableHeader = () => {
  return (
    <thead>
      <th>Id</th>
      <th>Country</th>
      <th>Stock Name</th>
    </thead>
  )
}


const TableBody = props => {
  return (<tbody>
    {
      props.joinList.map((nestedItem, i) => (
            nestedItem.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.country}</td>
              <td>{data.stockName}</td>
            </tr>
          ))
      ))}
  </tbody>);
}

class Table extends React.Component {
  render() {
    const { joinList } = this.props

    return (
      <table className="table">
        <TableHeader />
        <TableBody joinList={joinList} />
      </table>
    )
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
    const users = [
      { "id": 1, "country": "a", "stockName": "a" }, { "id": 1, "country": "b", "stockName": "b" }, { "id": 1, "country": "c", "stockName": "c" }
    ];

    const joinList = [users, users];

    return (
      <div className="container">
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addSearchResult} />
        <div>
          <Table joinList={this.state.searchResults} />
        </div>
        {/* <CardList searchResults={this.state.searchResults} /> */}
      </div>
    );
  }
}

export default App;
