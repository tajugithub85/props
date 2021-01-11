import React from 'react';


class Pokecard extends React.Component {
 

	render() {
		const styl = {
			backgroundColor: "#869286",
			marginLeft: 400,
			width: 180,
			textAlign: "center",
			borderRadius: 20,
			display: "inlineBlock",
			fontSize: 15
		}
	
		
		return (
			<div style={styl}>
			  <div>
				<h1>Name: { this.props.name}</h1>
				<img src={ this.props.image}/>
				<h1>Type: { this.props.type}</h1>
			 </div>
			</div>
		) 
	}
}


export default Pokecard;

