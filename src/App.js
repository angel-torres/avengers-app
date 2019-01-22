import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import './Avengers.css';
import AvengersList from './components/AvengersList';
import Home from './components/Home';
import Avenger from './components/Avenger';
import { Link } from 'react-router-dom'; 
import avengers from './AvengerData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers,
    }
  }
  render() {
    const { avengers } = this.state;
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
        <Route exact path='/avengers' render={props => <AvengersList {...props} avengers={avengers}/>} />
        <Route path='/avengers/:userId' render={props => <Avenger {...props} avengers={avengers}/>}/>
      </div>
    );
  }
}

export default App;
