


import axios from 'axios';
const PRODUCT_LIST_REQUEST='PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS='PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_FAIL='PRODUCT_LIST_FAIL';





export const getInitialData = () => async (dispatch) => {
try{
	dispatch({ type:PRODUCT_LIST_REQUEST});

	const { data } = await axios.get('/tt');

	
	dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
}

catch(error)
{
dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
}
}




/*const getInitialData=() => async (dispatch) => {
   
   

};
*/



