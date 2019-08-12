import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {

	const [products] = useState(data);

	const [cart, setCart] = useState([]);

	const addItem = item => {

		const isInCart = cart.find( el => el.id === item.id)

		isInCart ? item.quantity += 1 
		:  setCart([...cart, item])
			item.quantity += 1;

	};

	const removeItem = props => {


		let updatedCart = cart.filter( el => { return el.id !== props.id})

		setCart([...updatedCart])

	}

	const setQuantity = (props, event) => {
		let updatedArr = []
		
		if (event.target.className === 'add'){
			
			updatedArr = cart.map( item => item.id === props.id ? {...item, quantity : item.quantity + 1} : item )

		} else {

			updatedArr = cart.map( item => item.id === props.id ? {...item, quantity : item.quantity - 1} : item )

		}
		
		setCart([...updatedArr])
}


	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value = {{ cart, removeItem, setQuantity }}>
				<div className="App">
					<Navigation />
					{/* Routes */}
					<Route exact path="/" component={ Products } />
					<Route path="/cart" component = { ShoppingCart } />	
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
