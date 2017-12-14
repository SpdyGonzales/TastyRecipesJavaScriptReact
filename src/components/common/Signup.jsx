import React, {Component} from 'react';
import {PostData} from '../../services/PostData';

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     firstname: '',
     lastname: '',
     username: '',
     password: '',
    };

    this.signup = this.signup.bind(this);
  }
 

  signup(data) {
    console.log(data)
    if(data){
    PostData('signup.php',data).then((result) => {
      let responseJson = result;
      if(responseJson.userData){         
        sessionStorage.setItem('userData',JSON.stringify(responseJson));
      }
      
     });
    }
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }
   
  

    return (
      <form onSubmit={this.signup}>
        <p>SignUp</p>
        <input type="text" name="firstname" placeholder="firstname" /><br />
        <input type="text" name="lastname" placeholder="lastname" /><br />
        <input type="text" name="username" placeholder="username" /><br />
        <input type="password" name="password" placeholder="password" /><br />
        <button type="submit">SIGNUP</button>
      </form>
    );
  }
}

export default Signup;