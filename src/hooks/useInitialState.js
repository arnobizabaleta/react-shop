import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeFromCart = (indexValue) => {
		setState({
		  ...state,
		  cart: state.cart.filter((product,index) => index !== indexValue),
		})
		/* Ese condicional lo que dice es: “SALVA TODOS” los elementos (<OrderItem />) 
		del vector state.cart que NO tengan ese indexValue que llega. 
		El index que llega por supuesto es al que le hacemos click. 
		Por lo tanto, lo saca del vector y el nuevo vector state.cart es sin ese elemento 
		al que hicimos click en la X. */
	  }
	return {
		state,
		addToCart,
		removeFromCart
	}
}

export default useInitialState;