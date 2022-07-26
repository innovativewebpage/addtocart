import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';



import {getInitialData } from '../actions';


 
   
 

function Basket(props) {
	const [cartItems,setCartItems] = useState([]);

const [localSto,getlocalSto] = useState(false);
	
		const productList = useSelector(state => state.productList);
		//console.log('basket productList=',productList);
		
	//console.log('reducer value=',productList);
	
	 const dispatch = useDispatch();
	 
	 const onAdd = (item) => {
		 //alert(item);
		const exist = cartItems.find((x) => x.id === item.id); 
		if(exist)
	{
		setCartItems(
			cartItems.map((x) =>
			x.id === item.id ? {...exist,qty:exist.qty + 1} :x
			)
		);

		getlocalSto(true);
	
	}
		else
		{	
			setCartItems([{...item,qty:1}]);
			
		}

		getlocalSto(true);
	 }
	 
	

 
	 
	 const onRemove = (item) => {
	const exist = cartItems.find((x) => x.id === item.id);
if(exist.qty === 1)
	{
		setCartItems(cartItems.filter((x) => x.id !== item.id));
		getlocalSto(true)
		//console.log('exist.qty==', cartItems);	
	//localStorage.setItem('products',JSON.stringify(setCartItems(cartItems.filter((x) => x.id !== item.id))));		
	}
	else
	{
		setCartItems(
			cartItems.map((x) =>
				x.id === item.id ? { ...exist,qty:exist.qty -1}:x
			)
			
		);	
		getlocalSto(true);
	}
	
	
	
};	


if(localSto)
{
		//console.log('set');
		//console.log('cartItems=',cartItems);
		
		localStorage.setItem('products',JSON.stringify(cartItems));	
		getlocalSto(false);
}	


	  
	 
	 const itemsPrice = cartItems.reduce((a,c) =>
	a +c.price * c.qty,0);
	
const taxPrice = itemsPrice * 0.14;
const shippingPrice = itemsPrice > 2000 ? 0 :50;
const totalPrice = itemsPrice + taxPrice + shippingPrice;

	 
	 
	 //const Macbook = cartItems.filter(item => item.name === 'Macbook');
	 //const moviest = cartItems.find(item => item.name === 'Macbook'); 
	 //const MacbookCount = Macbook.length;
 
 /*let comp;

 if (MacbookCount > 0 ) {
      comp = <h1>more than zero</h1>
    } else {
      comp = <h1>zero</h1>
    }
*/
	
	
	  useEffect(() => {	  
 var users = JSON.parse(localStorage.getItem("products") || "[]");
//console.log('sssBasket page',users);
//setCartItems(cartItems)
setCartItems([...users]);
  
    }, [productList]);

	
	return (<div>
		<h3>Basket</h3>

	
{ JSON.stringify(cartItems, null, 2) }
	
	 {/*
		 
		 
		 MacbookCount > 0 &&
        <h2>
          You have
		  unread messages.
        </h2>
		
		*/
      }
	
	
	{/*comp*/}

	
	{ /*JSON.stringify(cartItems, null, 2) */}
	
	
	{ /*JSON.stringify(movies, null, 2)*/ }
	
	
	{ /*JSON.stringify(moviest, null, 2)*/ }



  



	
	
	{/*moviesCount*/}
	
	
	{cartItems.map((item) => (
	<div key={item.id} className="row">
	
	

	
		<div className="col-2">{item.name}</div>
		
			<div className="col-2 text-right">
					{item.qty} X ${item.price.toFixed(2)}
			</div>
			
			<button onClick={() =>onAdd(item)} className="add">
				+
			</button>
			
			
			<button onClick={() => onRemove(item)} className="remove">
				-
			</button>
		
		
		
	</div>		
))}
	
	
	{cartItems.length !== 0 && (
	<>
		<div className="row">
			<div className="col-2">Items Price</div>
			<div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>

		</div>
		
		
		<div className="row">
			<div className="col-2">Tax Price</div>
			<div className="col-1 text-right">${taxPrice.toFixed(2)}</div>

		</div>
		
		
		<div className="row">
			<div className="col-2">Shipping Price</div>
			<div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>

		</div>
		
		<div className="row">
			<div className="col-2">
				<strong>Total Price</strong>
			</div>
			<div className="col-1 text-right">
			<strong>${totalPrice.toFixed(2)}</strong>
			</div>

		</div>
	</>
)}



	
	
				
					
					
					
	</div>)
}

export default Basket;