import React,{useState} from 'react'
import { Card, Header,Icon,Image,Modal } from 'semantic-ui-react';
import { useDispatch,useSelector } from 'react-redux';
import { screenChange } from '../Services/Categoryaction';

import './Card.css'
import ProdcutModal from './ProductModal';
import ProductCard from './ProductCard';
import SubCardComponent from './SubCardComponent';
function ProductScreen
({cartDetails,setCartDetails,open,setOpen}) {
    const categories = useSelector((state)=>state.category.categories)
    const subCategories = useSelector((state)=>state.category.subCategories)
    const dispatch=useDispatch();
    const products = useSelector((state)=>state.category.products)
    const productScreen = useSelector((state)=>state.category.productScreen)
console.log(products)
  return (
    <div>
         <Header as='h2' attached='top'>
          <span>
            <Icon name='arrow left' style={{cursor:"pointer"}}onClick={()=>dispatch(screenChange())}/>
            <span>All Products</span>
            </span>
            <div className='category-card'>
                {
                    products.length>0 &&products.map((item,id)=>

    <ProductCard open={open} setOpen={setOpen} item={item} cartDetails={cartDetails} setCartDetails={setCartDetails}/>

                    )
                    
                }
            </div>
            {
              products.length<0 &&(
                <div>
                <h4>No Products Are There Under This Category</h4>
                </div>
              )
            }
           
         </Header>
         {
  productScreen && (<Header as='h2' attached='top'>
    Sub Categories
<div className='category-card'>
    {
        subCategories.length>0 && (subCategories.map((item,id)=>
        <SubCardComponent item={item} image={item.subCategoryImageURL} title={item.subCategoryName}/>))
      
    }
   </div>
   {  subCategories.length<=0 &&(      <h1>There is No subCategories</h1>
)
   }
</Header>
)}
    </div>
  )
}

export default ProductScreen;
