import axios from "axios";

export const getAllMeals = () => async dispatch => {

  dispatch({ type: 'GET_MEALS_REQUEST'});
 try {
     const response = await axios.get("http://localhost:5000/api/menu/getallmeals")  
     console.log(response);
    dispatch({ type: 'GET_MEALS_SUCCESS', payload : response.data });
  } catch (error) {
    dispatch({ type: "GET_MEALS_FAILED", payload : error});
    console.log(error);
  }
};