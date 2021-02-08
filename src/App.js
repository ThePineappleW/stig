import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import About from './components/about';
import Home from './components/home';
import Login from './components/login';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'false',
      username: '',
      password: ''
    }
  }

  //gets LoggedIn data from Login component
  callbackFunction = (childData) => {
    this.setState({isLoggedIn: childData})
  }

    render() {
  return (
    <div>
      <Router>
            <div id="header">
                <h1>STIG</h1>
                <h3> Logged in: {this.state.isLoggedIn}</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login">
                  <Login parentCallback = {this.callbackFunction} />
                </Route>
            </div>
        </Router>
      </div>
  );
  }
}

export default App;
