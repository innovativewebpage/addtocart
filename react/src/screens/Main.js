import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getInitialData } from '../actions';

	
	var product_value = "";

function Main(props) {
	const [cartItems,setCartItems] = useState([]);
	const [adjust,setAdjust] = useState('');
	
	//const [statetest,setstatetestItems] = useState('omar');
	
	
	
	const addTest = (product) => {
		
		setAdjust(true);
		//alert(product);
		//console.log('first_test=',statetest);
	//console.log('first.js=',cartItems);
	var users = JSON.parse(localStorage.getItem("products") || "[]");
	console.log('usersMain.js=',users);
	
		if(users)
		{
			setCartItems([...users]);
		}

		product_value=product;	
		
	}

	if(product_value && adjust)
		{
			
		console.log('Main CartItems=',cartItems);	
		const exist = cartItems.find((x) => x.id === product_value.id);
//console.log('exist',exist);

//console.log('product_value==',product_value)

if(exist)
	{
		setCartItems(
			cartItems.map((x) =>
			x.id === product_value.id ? {...exist,qty:exist.qty + 1} :x
			)
		);
	}
	else
	{	
		setCartItems([...cartItems,{...product_value,qty:1}]);
	}	
setAdjust(false);
		
		}	
	
	
		/*if(product_value)
		{	
console.log('Main CartItems=',cartItems);
const exist = cartItems.find((x) => x.id === product_value.id);
console.log('exist',exist);
if(exist)
	{
		setCartItems(
			cartItems.map((x) =>
			x.id === product_value.id ? {...exist,qty:exist.qty + 1} :x
			)
		);
	}
	else
	{	
		setCartItems([...cartItems,{...product_value,qty:1}]);
	}	

	
}
*/


	

		//console.log('first.js=',cartItems);
	
		//setstatetestItems('Rizwan');
			
		//console.log('product==',product.id)
		 //product_value = product.id;
		/*if(users)
		{
	setCartItems(
			cartItems.map((x) =>
			x.qty === product.id ? {...exist,qty:exist.qty + 1} :x
			)
		);		
		}
		*/
		/*if(product)
		{
console.log('sss.js=',cartItems);
console.log('second_test=',statetest);
		}		
	*/
	//}
	
	//console.log('second_test=',statetest);
	
	
	//console.log('first.js=',cartItems);
	
	//console.log('product==',product_value);
	
	/*const exist = cartItems.find((x) => x.id === product_value.id);
console.log('exist',exist);
if(exist)
	{
		setCartItems(
			cartItems.map((x) =>
			x.id === product_value.id ? {...exist,qty:exist.qty + 1} :x
			)
		);
	}
	else
	{	
		setCartItems([...cartItems,{...product_value,qty:1}]);
	}	
*/

/*if(cartItems)
{
localStorage.setItem('products',JSON.stringify(cartItems));		
}	*/

	
	
	const addHandler = (product) => {
		var users = JSON.parse(localStorage.getItem("products") || "[]");
		console.log('usersMain.js=',users);
		
		//const test=localStorage.setItem('products',JSON.stringify(cartItems));
		if(users)
		{
setCartItems([...cartItems,{...product,qty:1}]);	
			
		}
		
		if(users)
		{
			
			
//console.log('cartItems Main.js==',cartItems);
		}		

		

		
		
		
		
		
const exist = cartItems.find((x) => x.id === product.id);
console.log('exist',exist);
if(exist)
	{
		setCartItems(
			cartItems.map((x) =>
			x.id === product.id ? {...exist,qty:exist.qty + 1} :x
			)
		);
	}
	else
	{	
		setCartItems([...cartItems,{...product,qty:1}]);
	}	
	


	
};

	

if(cartItems)
{
localStorage.setItem('products',JSON.stringify(cartItems));		
}	

//var users = JSON.parse(localStorage.getItem("products") || "[]");

//console.log('sssMain page',users);

/*const add_to_cart_check = users.filter(item => item.name === 'Macbook');

const add_to_cart_check_count = add_to_cart_check.length;

console.log('add_to_cart_check_count',add_to_cart_check_count);
*/

		/*var existing = localStorage. getItem('myFavoriteSandwich');
existing = existing ? existing.split(',') : [];
existing.push(product);
console.log('existing=',existing);*/

//existing.push(product);

//localStorage.setItem('myFavoriteSandwich', existing.toString());
//localStorage.setItem('products',JSON.stringify(product));
		
  //  dispatch(deleteProdcut(product._id));
  
 // var receiveddata = [];
  // var receiveddata = JSON.stringify(product);
   // receiveddata.push(receiveddata);
   // alert(receiveddata);
   
  // localStorage.setItem('products',JSON.stringify(product));
 
	
	const productList = useSelector(state => state.productList);
	
	// console.log('productList=',productList);
	 
	  //console.log('productList=',productList.productstest);
	
	const { loading, productstest } = productList;


if(productstest)
{
const {  products } = productstest;	

var test = products;

//console.log(test);
}	

//console.log(test);

 
 
	
	//console.log(products)

	
//const listItems = productstest.products.map((d) => <li key={d.name}>{d.name}</li>);	
	//const {products} = productstest;
	
	//console.log('products=',products);

//console.log('Main__productList==',productList)

//console.log('Main__cartItems==',cartItems)



	
	 const dispatch = useDispatch();
  
  useEffect(() => {	  
  dispatch(getInitialData());
    }, [cartItems]);
	
	
	return <div>
	
	<div className="row">
	
	
	{/*<h3>sdafsdaf</h3>*/}
 
{ /*JSON.stringify(test, null, 2) */}

{ /*JSON.stringify(users, null, 2)*/ }

	
  {test ? 
      
	  //console.log('ok');
	  test.map((product,index) => (
	 
	 
	  <>
		
			<div key={index}>
			<p >{index}</p>
			<p>{product.name}</p>
			<p>{product.price}</p>
			<p><img className="small" src={product.image} alt={product.name}></img></p>
			
			
			
			
			
			{/*<button  className="button"
            onClick={() => addHandler(product)}>Add To Cart</button>*/}
			
			<button  className="button"
            onClick={() => addTest(product)}>Test</button>
			
			</div>
	
		</>	
	  ))
		
       : 
        console.log('not ok')
      }
 
	
	</div>

</div>
	
}


export default Main;