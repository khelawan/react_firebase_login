import React, { Component } from 'react';
import fire from './config/Fire';


const styleBtn = {
    border : '1px solid grey',
    marginLeft: '25px'
  }

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
            <div>Welcome to Home</div>
            <button style={styleBtn} onClick={this.logout}>Logout</button>
            </div>
            );


    }

}

export default Home;