import { createStore,
combineReducers,
applyMiddleware,
compose } from 'redux';
import thunk from 'redux-thunk';
/*cookie is for adding multiple products one after another
in cart*/
import Cookie from "js-cookie";

import { productListReducertt } from 
'./reducers/productReducers';


const initialState = {
  //cart: { cartItems, shipping: {}, payment: {} },
  //userSignin: { userInfo },
};





const reducer = combineReducers({
	productList:productListReducertt
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));
export default store;
