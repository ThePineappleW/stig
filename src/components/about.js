import React from 'react';

class About extends React.Component {
    render() {  
        return( 
            <div style={{backgroundColor:'blue'}}>
                <h1>About STIG</h1> 
                <h2>Logged in: {this.props.dataFromParent}</h2>
            </div>
        );
    }  
}
export default About;