import React, { Component } from "react";
import { Router, Route, Switch } from 'react-router-dom';
import logo from "../logo.svg";
import "../App.css";
import history from '../history';
import Header from './Header';
import ToDoList from './todoList/ToDoList'
import { Container } from '@material-ui/core';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    // callAPI() {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    // componentDidMount() {
    //     this.callAPI();
    // }

    render() {
        return (
            <Container>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={ToDoList} />
                            {/* <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} /> */}
                        </Switch>
                    </div>
                </Router>
            </Container>
        );
    }
}

export default App;