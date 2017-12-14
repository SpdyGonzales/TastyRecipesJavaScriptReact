import React, { Component } from 'react';
import x2js from 'x2js';

import CommentSection from '../common/CommentSection.jsx';
import '../../styles/recipes.css';

console.log(x2js);

const xml2JsonParser = new x2js();
console.log(xml2JsonParser);

const imageObj = {

}

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipeData: null
		}
	}

	componentWillMount(){
		console.log('mounted recipe', this.props)
		this.getRecipes(this.props);
	}
	componentWillReceiveProps(props){
		this.getRecipes(props);
	}

	getRecipes(props) {
		// byt detta mot PostData? o kanske PostData kan heta RequestData
		return fetch('src/server/util/xml-service.php?recipe=' + props.match.params.id)
			.then((response) => {
				response.json().then((data) => {
					this.setState({
						recipeData: data[0]
					})
				})
			}
			)
			.catch(error => console.error(error))
	}

	render() {
		console.log('recipe render', this.state.recipesData);
		const {recipeData} = this.state;
		return (
		<div>
			<article className="recipe">
			<div className="spacer"/>
			<h1>Recipes</h1>
			{recipeData ?
			<div className="flexbox">
			<div id={this.props.match.params.id} className="poster" title="Meatballs with fresh salad"></div>
			<div className="textpos">
				<h1>{this.state.recipeData.title}</h1>
				<div className="flexbox--column">
				<div className="flexbox--flexitem">
				<h2 className="list--title">Ingredients</h2>
				<ul>
					{recipeData.ingredient.li.map((ingredient, index) => {
						return (
							<li>{ingredient}</li>
						)
					})}
				</ul>
				</div>
				<div className="spacer"></div>
				<div className="flexbox--flexitem">
				<h2 className="list--title">Directions</h2>
					<ul>
					{recipeData.recipetext.li.map((recipetext, index) => {
						return (
							<li>{recipetext}</li>
						)
					})}
					</ul> 
				</div>
				</div>
			</div>
			</div>
			: <h1>No recipes found</h1>}
				<CommentSection recipeSite={this.props.match.params.id} />
			</article>
		</div>
		)
	}
}

export default Recipes;