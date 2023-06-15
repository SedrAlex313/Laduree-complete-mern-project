import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  try {
    await axios.post("http://localhost:5000/api/boutique/orders/placeorder", {
      token,
      subtotal,
      // currentUser,
      // cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};