import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategories,getSubCategories } from '../Services/Categoryaction';
import { Header ,Card,Divider} from 'semantic-ui-react';
import CardComponent from './CardComponent';

import "./Card.css"
import SubCardComponent from './SubCardComponent';
import ProductScreen from './ProductScreen';
function CategoriesScreen({cartDetails,setCartDetails,open,setOpen}) {
    const dispatch=useDispatch();
    const categories = useSelector((state)=>state.category.categories)
    const subCategories = useSelector((state)=>state.category.subCategories)
    const productScreen=useSelector((state)=>state.category.productScreen)
    console.log(categories,subCategories
        )
        const[activeId,setActiveId]=useState(null);
        const[subId,setSubId]=useState(null);

    useEffect(()=>{
      if(!productScreen){
        dispatch(getCategories())
      }
      if(categories.length>0){
        setActiveId(categories[0].categoryId)

      }
      if(subCategories.length>0){
        setSubId(subCategories.subCategoryId)
      }
    },[])
  return (
    <div style={{height:'90%'}}>
      {
        !productScreen && (
      
      <Header as='h2' attached='top'>
  Print Heads
  <div className='category-card'>
  {
    categories.length>0 ? categories.map((item,id)=>
         <CardComponent item={item} image={item.categoryImageURL} title={item.categoryName} activeId={activeId}setActiveId={setActiveId}/>
    ):<h1>Loadinmg</h1>
  }
        </div>
        <Divider/>
        <div className='category-card'>
    {
        subCategories.length>0 && (subCategories.map((item,id)=>
        <SubCardComponent item={item} sub={subId} setSubId={setSubId} image={item.subCategoryImageURL} title={item.subCategoryName}/>))
    }
  
   </div>
   <div>
   {
      subCategories.length<=0 &&(
        <span>There is no sub catrgoies There</span>
      ) 
    }
    </div>
  </Header>
)}

{
  productScreen &&(
    <ProductScreen  open={open} setOpen={setOpen} cartDetails={cartDetails} setCartDetails={setCartDetails}/>

  )
}
  </div>
  )
}

export default CategoriesScreen;