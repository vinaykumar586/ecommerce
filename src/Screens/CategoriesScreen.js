import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories,getSubCategories } from '../Services/Categoryaction';
import { Header ,Card,Divider} from 'semantic-ui-react';
import CardComponent from './CardComponent';

import "./Card.css"
import SubCardComponent from './SubCardComponent';
import ProductScreen from './ProductScreen';
function CategoriesScreen() {
    const dispatch=useDispatch();
    const categories = useSelector((state)=>state.category.categories)
    const subCategories = useSelector((state)=>state.category.subCategories)
    const productScreen=useSelector((state)=>state.category.productScreen)
    console.log(categories,subCategories
        )
    useEffect(()=>{
      if(!productScreen){
        dispatch(getCategories())
      }
    
    },[])
  return (
    <div style={{margin:"18px"}}>
      {
        !productScreen && (
      
      <Header as='h2' attached='top'>
  Print Heads
  <div className='category-card'>
  {
    categories.length>0 ? categories.map((item,id)=>
         <CardComponent item={item} image={item.categoryImageURL} title={item.categoryName}/>
    ):<h1>Loadinmg</h1>
  }
        </div>
        <Divider/>
        <div className='category-card'>
    {
        subCategories.length>0 ? (subCategories.map((item,id)=>
        <SubCardComponent item={item} image={item.subCategoryImageURL} title={item.subCategoryName}/>)):
        <h1>There is No subCategories</h1>
    }
   </div>
  </Header>
)}

{
  productScreen &&(
    <ProductScreen/>

  )
}
  </div>
  )
}

export default CategoriesScreen;