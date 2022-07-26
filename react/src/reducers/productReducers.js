


const PRODUCT_LIST_REQUEST='PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS='PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_FAIL='PRODUCT_LIST_FAIL';


function productListReducertt(state = {productstest:[]},action)
{
	//console.log(action.type);
	


	
	switch(action.type)
	{
		case PRODUCT_LIST_REQUEST:
			return {loading:true};

		case  PRODUCT_LIST_SUCCESS:
			return {loading:false, productstest:action.payload};

		case PRODUCT_LIST_FAIL:
			return {loading:false,error:action.payload}
		
		default:
			return state;
	}
}


export {productListReducertt}




