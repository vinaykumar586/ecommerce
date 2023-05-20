import * as types from './Categoriestypes';
const initialState={
    categories:[],
    subCategories:[],
    products:[],
    productScreen:false,
    finalCartDetails:[],
}

const Catgegoryreducer=(state=initialState,action)=>{
  
    switch(action.type){
        case types.GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
                productScreen:false,
            };
           
            case types.GET_SUBCATEGORIES:
                return{
                    ...state,
                    subCategories:action.payload,
                    productScreen:false,
                }
                case types.GET_ALL_PRODUCTS:
                    return {
                        ...state,
                     products:action.payload,
                     productScreen:true
                    }
                    case types.SCREEN_CHANGE:
                        return{
                            ...state,
                            productScreen:false,
                            products:[]
                        }
                case types.POST_FINAL_CART:
                    return {
                        ...state,
                        finalCartDetails:action.payload
                    }
            default:
                return state;
    }
}
export default Catgegoryreducer;