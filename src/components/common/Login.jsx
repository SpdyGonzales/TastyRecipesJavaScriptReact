import React, {Component} from 'react';

import {PostData} from '../../services/PostData';

class Login extends Component{
	
	constructor(props){
	super(props);
	this.login = this.login.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		})
	}
	login(event){
		event.preventDefault();
    	console.log(this.state);
	  if(event){
        PostData('login.php', this.state, 'POST').then((result) => {
				result.json().then((data) => {
					console.log('result', data)
					this.props.loginCallback(data);
				})
				.catch((error) => {
					console.log(error)
				})
				/*
         if(responseJson.userData){         
           sessionStorage.setItem('userData',JSON.stringify(responseJson));
           this.props.loginCallback();
         }
       */
        }).catch((error) => {
        	// TODO: Error handling
        	console.error(error)
        })
      }
	}
	render() {

	    return (
              <form onSubmit={this.login}>
                <p>Login</p>
                  <input type="text" name="uid" placeholder="Username" onChange={this.handleInputChange}/>
                  <input type="password" name="pwd" placeholder="Password" onChange={this.handleInputChange}/>
                  <button type="submit">LOGIN</button>
              </form>
	    );
  	}
}

export default Login