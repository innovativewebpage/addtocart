import React,{useState,useEffect} from 'react';



function HomeScreen(props) {
	
	
	return (
		<header className="row block center">
			<div>
				<a href="#">
				<h1>Small Shopping Cart</h1>
				</a>
			</div>
		
			<div>
				<a href="#/cart">
				
				Cart{' '}
				
				{(

<button className="badge">0
	</button>	

)}
				
				</a> {'    '} 
				
				<a href="#/signin">SignIn</a>
				
				
			</div>
		</header>
	)
}

export default HomeScreen;