//TODO: figure out communication with backend via fetch; sendCredentials()

import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    login: 'false',
  }
      //tells the main App function to set loggedIn = true
      sendIsLoggedIn = () => {
        this.props.parentCallback('true');
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

      sendCredentials = () => {
        this.logValue();

        var status;
        var address = "http://localhost:3000/api";

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", this.state.username);
        urlencoded.append("password", this.state.password);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        console.log(requestOptions);

        fetch( address, requestOptions )
          .then(response =>  
          {
            status = response.status;
            console.log("check 1: status = " + status);
            if(status === 200){
              console.log("Login accepted!");
              this.setState({login: true});
              this.sendIsLoggedIn();
            }else if(status === 404){
              console.log("Login denied :(");
            }else{
              console.log("Error: " + status);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      render() {
        return (
          <div style={{backgroundColor:'lemonchiffon'}}>
            <h1>Log in to get started.</h1>
            <input onChange={this.handleInputU} placeholder="Username" />
            <input onChange={this.handleInputP} placeholder="Password" />
            <button onClick={this.sendCredentials}>Login</button>
          </div>
        );
      }
}
export default Login;