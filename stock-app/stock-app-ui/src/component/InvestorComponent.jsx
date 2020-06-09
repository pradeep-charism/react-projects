import React, { Component } from 'react';
import ListStocksComponent from './ListStocksComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StockComponent from './StockComponent';
import DisplayTableComponent from './DisplayTableComponent';

class InvestorComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>My Stock Holdings</h1>
                    <Switch>
                        <Route path="/table" exact component={DisplayTableComponent} />
                        <Route path="/" exact component={ListStocksComponent} />
                        <Route path="/stocks" exact component={ListStocksComponent} />
                        <Route path="/stocks/:id" component={StockComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InvestorComponent