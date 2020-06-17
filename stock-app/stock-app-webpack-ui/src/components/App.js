import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import axios from 'axios';
import TableComponent from './TableComponent';
import './App.css';
import NavBar from './NavBar';
import SelectComponent from './SelectComponent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import Home from './Home';
import Loading from './Loading';

class Form extends React.Component {
  state = {
    enableOverride: true,
    country: '',
    stockName: '',
    quantity: '',
    overrideQuantity: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8080/depository/github/data', {
      country: `USA`,
      stockName: `Amazon`,
      quantity: `${this.state.quantity}`
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

  handleChangeForEvent = (event) => {
    console.log("check box: " + event.target.checked);
    this.setState({
      enableOverride: !event.target.checked
    });
    if (!event.target.checked) {
      this.setState({ overrideQuantity: '' })
    }
  };

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
              <td>
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Quantity</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.quantity}
                    onChange={event => this.setState({ quantity: event.target.value })}
                    label="Quantity"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Order quantity</FormHelperText>
                </FormControl>
                <Checkbox
                  onChange={this.handleChangeForEvent}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <TextField disabled={this.state.enableOverride} value={this.state.overrideQuantity} id="outlined-basic" label="Override Quantity" variant="outlined"
                  onChange={event => this.setState({ overrideQuantity: event.target.value })} />
              </td>
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
      // <Router>
      //   <div>
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/dynamic" component={AsyncDynamicPAge} />
      //       <Route component={AsyncNoMatch} />
      //     </Switch>
      //   </div>
      // </Router>

      <div className="container">
        <NavBar />
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addSearchResult} />
        <div>
          <TableComponent joinList={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

// const AsyncDynamicPAge = importedComponent(
//   () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
//   {
//     LoadingComponent: Loading
//   }
// );
// const AsyncNoMatch = importedComponent(
//   () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
//   {
//     LoadingComponent: Loading
//   }
// );

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/dynamic" component={AsyncDynamicPAge} />
//           <Route component={AsyncNoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

export default App;