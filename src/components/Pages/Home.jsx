import React, { Component } from 'react';
import '../../styles/index.css';
import '../../styles/reset.css';


class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		console.log('mounted')
	}

	render() {
		return (
		<article id="home" className="home--wrapper">
		      <div className="welcometitle">
		      	<h1><span>Welcome to</span>
		      		Tasty Recipes</h1>
		      </div>
		      <div className="flexbox">
		         <div id="meatballs" className="poster" title="Meatballs"></div>
		         <div className="spacer"></div>
		         <div id="pancakes" className="poster" title="Pancakes"></div>
		      </div>
		        <div className="spacer"></div>
		        <div className="flexbox">
		          <div id="picsoup" className="poster" title="Brocolli Soup"></div>
		          <div className="spacer"></div>
		          <div id="piccarrot" className="poster" title="Fresh Carrots"></div>
		        </div>
		      <div className="endspacer"></div>
		</article>
		)
	}
}

export default Home;