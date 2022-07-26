import { CART_ADD_ITEM} from "../constants/cartConstants";
import { CART_REMOVE_ITEM} from "../constants/cartConstants";




function cartReducer(state = { cartItems: [] },action) {
  
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case CART_ADD_ITEM:
	
	//return {loading:false, cartItems:action.payload};
	const item = action.payload;
	//console.log(item);
	
	const product = state.cartItems.find(x => x.product === item.product);
     // console.log(product);
	  
	  if (product) {
        return {
          cartItems:
            state.cartItems.map(x => x.product === product.product ? item : x)
        };
      }
      return { cartItems: [...state.cartItems, item] };
	
	case CART_REMOVE_ITEM:
      return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
	
	default:
			return state;
  }		
}  
			export {cartReducer};
	
	/*const item = action.payload;
	const product = state.cartItems.find(x=> x.product === item.product);
	
	if(product)
	{
		return {
			cartItems:
			state.cartItems.map(x=>x.product === product.product ? item:x)
			
			};
	}
	
	case CART_REMOVE_ITEM:
	return { cartItems:state.cartItems.filter(x=>x.product!== action.payload)};
	
	
	
	
	return { cartItems: [...state.cartItems, item] };	
	default:
		return state;
	}
}*/

