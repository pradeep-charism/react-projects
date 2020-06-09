import React, { Component } from 'react';
import ListStocksComponent from './ListStocksComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListStocksComponent} />
                        <Route path="/stocks" exact component={ListStocksComponent} />
                        <Route path="/stocks/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp