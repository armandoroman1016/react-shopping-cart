import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'


const Item = props => {

	const { removeItem } = useContext(CartContext)
	const { setQuantity } = useContext(CartContext)

	const total = props.price * props.quantity

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>Item Cost: $ {props.price}</p>
				<p>Total Cost: ${total}</p>
				<p>
					<button onClick = { (event) => setQuantity(props, event)} className = 'remove'>-</button>
					Quantity : {props.quantity}
					<button onClick = { (event) => setQuantity(props, event)} className = 'add'>+</button>
				</p>
				<button onClick = {() => removeItem(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
