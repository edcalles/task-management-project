import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from  "./components/Navbar";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Contact from "./components/Contact";

export default function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todo' component={Todo} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}
