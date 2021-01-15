import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Login from './components/login';

function App() {
 
  return (
    <div>
      <Router>
            <div>
                <h1>STIG</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Login" component={Login} />
            </div>
        </Router>
      </div>
  );
}

export default App;
