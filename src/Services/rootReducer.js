import { combineReducers } from "redux";
import Catgegoryreducer from "./Catgegoryreducer";
 
const rootReducer = combineReducers({
    category: Catgegoryreducer,
   
  });
  export default rootReducer;