//TODO: figure out communication with backend via fetch; sendCredentials()

import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
      };
    
      handleInputU = event => {
        this.setState({ username: event.target.value });
      };
      
      handleInputP = event => {
        this.setState({ password: event.target.value });
      };


      logValue = () => {
        console.log("U: " + this.state.username);
        console.log("P: " + this.state.password);
      };

      /**sendCredentials = () => {
       
      }**/
    
      render() {
        return (
          <div>
            <h1>Log in to get started.</h1>
            <input onChange={this.handleInputU} placeholder="Username" />
            <input onChange={this.handleInputP} placeholder="Password" />
            <button onClick={this.logValue}>Log value</button>
          </div>
        );
      }
}
export default Login;