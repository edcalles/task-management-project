import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, Switch, redirect } from 'react-router-dom';


import Home from "./components/Home"
import Todo from "./components/Todo"
import Contact from "./components/Contact"

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            isUserAuthenticated: true
        };
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/todo">To Do</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <hr />
                            <Routes>
                                <Route exact path ="/" render={()=> {
                                    return (
                                        this.state.isUserAuthenticated ?
                                        <redirect to="/home" /> :
                                        <redirect to="/test1" />
                                    )
                                }}
                                />
                                <Route exact path="/" component={Home} />
                                <Route exact path="/todo" component={Todo} />
                                <Route exact path="/Contact" component={Contact} />
                            </Routes>
                        </ul>
                    </div>
                </Router>
            </div>
        );
    }
}


export default App