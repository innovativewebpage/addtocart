import axios from 'axios';



export const getInitialData = () => {
  return async (dispatch) => {
	    const res = await axios.get('/');
	
	
	  
    
	
	
   
    console.log(res);
  };
};
