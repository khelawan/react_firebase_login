import React, { Component } from 'react';

import fire from './config/Fire';


const styleUserName = {
  marginBottom : '15px',
  marginTop:'20px'
  
}
const  inputbox = {
  border: '1px solid black',
  marginLeft:'5px',
  padding :'10px 10px 10px'
}
const styleBtn = {
  border : '1px solid grey',
  marginLeft: '25px'
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <div className="col-md-6">
       <form>
      <div className="form-group" style={styleUserName}>
       <label htmlFor="exampleInputEmail1">Email</label>
       <input style={inputbox} value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted"></small>
       <br></br>
      </div>
      <br/>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1" >Password</label>
      <input style={inputbox} value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <br></br>
      <button style={styleBtn} type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <button style={styleBtn} onClick={this.signup}  className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}
export default Login;