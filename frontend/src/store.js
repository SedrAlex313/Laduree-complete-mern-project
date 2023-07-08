import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { applyMiddleware,combineReducers } from "redux";
import { placeOrderReducer } from "./reducers/orderReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllMealsReducer } from './reducers/mealReducer';

//root-reducer
const rootReducer = combineReducers({
    placeOrderReducer: placeOrderReducer,
    getAllMealsReducer: getAllMealsReducer,

})
 const middleware= [thunk];
// actions hit middlewares before hit the reducers   

 export const store = createStore(
    rootReducer, 
    undefined, 
    composeWithDevTools(applyMiddleware(...middleware))
    );
