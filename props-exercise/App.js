import React from 'react'
import Pokecard from "./components/Pokecard"
import Pokemon from "./components/Pokemon"

class App extends React.Component {
 

	render() {
		const PokeData = Pokemon.map(item => <Pokecard
			key={item.id}
			name={item.name}
			type={item.type}
			image={item.image} />)
		return (
			<div>
				{PokeData}

			</div>
		) 
	}
}


export default App;

