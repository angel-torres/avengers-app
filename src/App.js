import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import './Avengers.css';
import AvengersList from './components/AvengersList';
import Home from './components/Home';
import Avenger from './components/Avenger';
import { Link } from 'react-router-dom'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/avengers">Anvengers</Link>
          </li>
        </div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/avengers' component={AvengersList} />
        <Route path='/avengers/:userId' component={Avenger}/>
      </div>
    );
  }
}

export default App;
