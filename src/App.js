import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// context
import {ProductContext, CartContext} from './context/ProductContext';

function App() {
	// two state properties
	const [products] = useState(data); // keep track of available products 
	const [cart, setCart] = useState([]); // keep track of items in cart 

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={cart}>
		<div className="App">
			{/* component */}
		
			<Navigation cart={cart} />

			{/* Routes */}
			{/* component */}
			<Route
				exact
				path="/" component={Products}
				
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
