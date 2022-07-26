


import React, {useEffect} from 'react';
import Header from './screens/Header';
import Main from './screens/Main';
import Basket from './screens/Basket';

import { useDispatch,useSelector } from 'react-redux';



import {getInitialData } from './actions';



import './App.css';

function App() {
	
	const productList = useSelector(state => state.productList);
	//console.log('reducer value=',productList);
	
	 const dispatch = useDispatch();
	 
	 
	 
  useEffect(() => {
  dispatch(getInitialData());
  var users = JSON.parse(localStorage.getItem("products") || "[]");
console.log('sss',users);
    }, []);
	
  return (
    <div className="App">
     
	 
       <Header/>
	    <Main/>
		<Basket/>
   
    </div>
  );
}

export default App;
