import React, { Component } from 'react';
import ListStocksComponent from './ListStocksComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StockComponent from './StockComponent';

class InvestorComponent extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>My Stock Holdings</h1>
                    <Switch>
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