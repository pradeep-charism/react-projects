import React, { Component } from 'react';
import ListStocksComponent from './ListStocksComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StockComponent from './StockComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
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

export default InstructorApp