import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/common/Header.jsx';
import Home from './components/Pages/Home.jsx';
import Recipes from './components/Pages/Recipes.jsx';
import Calendar from './components/Pages/Calendar.jsx';
import NoMatch from './components/common/PageNotFound.jsx';

class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = { userData: null}
	}
	updateUserData(data) {
		this.setState({userData: data});
	}
	render(){
		return (
			<Router basename="">
				<div>
					<Header setUserData={this.updateUserData} />	
					<Switch>
						<Route exact path="/home" component={Home} />
						<Route exact path="/recipes/:id" component={Recipes} userData={this.state.userData}/>
						<Route exact path="/calendar" component={Calendar}/>
						<Route component={NoMatch}/>
				</Switch>
			</div>
			</Router>
		)
	}
}

export default AppRouter;