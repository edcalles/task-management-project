import React from "react"
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from  "./components/Navbar.js";
import Home from "./components/Home.jsx";
import Todo from "./components/Todo.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx"

export default function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todo' component={Todo} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
      </div>
    </Router>
  );
}
