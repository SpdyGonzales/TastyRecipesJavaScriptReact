import React, { Component } from 'react';
import '../../styles/calendar.css';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarData: null
		}
	}

	componentWillMount(){
		console.log('mounted')
	}

	render() {
		return (
		<article id="calendar">
		    <div className="month"> 
		  		<ul>
		    		<li className="prev">&#10094;</li>
		    		<li className="next">&#10095;</li>
		    		<li>
		      		August
		      		2017
		    		</li>
		  		</ul>
			</div>
			<div className="calendar--wrapper">
			    <ul className="weekdays">
			  		<li>Mo</li>
			  		<li>Tu</li>
			  		<li>We</li>
			  		<li>Th</li>
			  		<li>Fr</li>
			  		<li>Sa</li>
			  		<li>Su</li>
			    </ul>

				<ul className="days"> 
			  	  <li>1</li>
			  	  <li>2</li>
			  	  <li>3</li>
			  	  <li>4</li>
			  	  <li>5</li>
			  	  <li>6</li>
			  	  <li>7</li>
			  	  <li>8</li>
			  	  <li>9</li>
			  	  <li><a id="pancakes" title="Pancake Day" className="background" href="pancake.php">10</a></li>
				  <li>11</li>
				  <li>12</li>
				  <li>13</li>
				  <li>14</li>
				  <li>15</li>
				  <li>16</li>
				  <li>17</li>
				  <li>18</li>
				  <li>19</li>
				  <li><a id="meatballs" title="Meatballs Day" className="background" href="meatballs.php">20</a></li>
				  <li>21</li>
				  <li>22</li>
				  <li>23</li>
				  <li>24</li>
				  <li>25</li>
				  <li>26</li>
				  <li>27</li>
				  <li>28</li>
				  <li>29</li>
				  <li>30</li>
				  <li>31</li>
		  	    </ul>
		  	</div>
	 	</article>
		)
	}
}

export default Calendar;