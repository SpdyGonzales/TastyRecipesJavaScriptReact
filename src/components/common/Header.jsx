import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import Signup from './Signup.jsx';
import Login from './Login.jsx';

const MenuLink = ({ label, to, activeOnExact }) => (
  <Route path={to} exact={activeOnExact} children={({ match }) => (
    <div className={match ? 'activepg' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			userData: null
		}
		this.updateLogin = this.updateLogin.bind(this)
	}
	updateLogin(data) {
		this.setState({
			isLoggedIn: true,
			userData: data

		}, () => {
			this.props.setUserData(this.state.userData);
		})
		
	}
	logout(){
		this.setState({
			isLoggedIn: false,
			userData: null
		})
	}
	render() {
		return (
			<header>
						<nav id="navbar">
							<ul>
								<li><MenuLink to="/home" label="Home"/></li>
								<li><MenuLink to="/Calendar" label="Calendar"/></li>
								<li><a className="dropdown">Recipes</a>
									<ul className="dropdown--menu">
										<li><MenuLink className="link" to="/recipes/pancakes" label="Pancakes" /></li>
										<li><MenuLink to="/recipes/meatballs" label="Meatballs" /></li>
									</ul>
								</li>
								{ 
								this.state.isLoggedIn 
								? <li><form onSubmit={this.logout}>
								 {this.state.userData.first}</form></li>
								:
								<li><a className="login">SignUp/Login</a>
									<ul className="dropdown--menu">
										<li>
											<Login loginCallback={this.updateLogin} />
											<Signup />
										</li>
									</ul>		
								</li>
								}	
							</ul>
							</nav>
			</header>
		)
	}
}

export default Header;