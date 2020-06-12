import React from 'react';
import axios from 'axios';
import TableComponent from './components/TableComponent';
import './App.css';
import NavBar from './components/NavBar';
import SelectComponent from './components/SelectComponent';


class Form extends React.Component {
  state = {
    country: '',
    stockName: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8080/depository/github/data', {
      country: `USA`,
      stockName: `Amazon`
      // country: `${this.state.country}`,
      // stockName: `${this.state.stockName}`
    })
      .then((response) => {
        console.log(response.data);
        this.props.onSubmit(response.data);
      }, (error) => {
        console.log(error);
      });

  //FIXME:  Reset form fields here
    this.setState({
      // country: '',
      // stockName: ''
    });

  };

  resetForm = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
            <td><input
              type="text"
              value={this.state.country}
              onChange={event => this.setState({ country: event.target.value })}
              placeholder="Stock Country"
              // required
            /></td>
            <td><input
              type="text"
              value={this.state.stockName}
              onChange={event => this.setState({ stockName: event.target.value })}
              placeholder="Stock Name"
              // required
            /></td>
            <td><SelectComponent /></td>
            <td><button className="btn btn-success">Search</button></td>
          </tr>
          </tbody>
          
        </table>
      </form >
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
      <div className="container">
        <NavBar />
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addSearchResult} />
        <div>
          <TableComponent joinList={this.state.searchResults} />
        </div>
        {/* <MTable joinList={this.state.searchResults} /> */}
      </div>
    );
  }
}

export default App;
