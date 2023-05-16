import * as types from './Categoriestypes';
import axios from 'axios'

export const getCategories = ()=>(dispatch)=>{
    let response=[];
    axios.get("https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json").then((result)=>{
       let images= ['https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory3.png',"https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory2.png"]
        response=result.data.result;
        let i=0;
        response=response.map((item)=>{
            if(!item.categoryImageURL){
                item.categoryImageURL =images[i];
                i++;
            }
            return item;
        })
        dispatch(getSubCategories(response[0].categoryId))
        dispatch({
            type:types.GET_CATEGORIES,
            payload:response
        })
    }).catch((err)=>{
        console.log(err)
    })
}

export const getSubCategories = (id)=>(dispatch)=>{
    console.log(id)
axios.get(`https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${id}.json`).then((res)=>{
    console.log(res.data.result)
    dispatch({
        type:types.GET_SUBCATEGORIES,
        payload:res.data.result
    })
}).catch((err)=>{
    console.log(err)
})
}

export const getProducts =(id)=>(dispatch)=>{
    axios.get(`https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${id}.json`)
    .then((res)=>{
        console.log(res.data.result)
        dispatch({
            type:types.GET_ALL_PRODUCTS,
            payload:res.data.result
        })
    }).catch((err)=>{
        console.log(err)
    })
}

export const screenChange=()=>(dispatch)=>{
    dispatch({
        type:types.SCREEN_CHANGE
    })
}