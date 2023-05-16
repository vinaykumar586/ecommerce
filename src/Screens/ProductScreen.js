import React from 'react'
import { Card, Header,Icon,Image } from 'semantic-ui-react';
import { useDispatch,useSelector } from 'react-redux';
import { screenChange } from '../Services/Categoryaction';
import './Card.css'
function ProductScreen
() {
    const dispatch=useDispatch();
    const products = useSelector((state)=>state.category.products)
  return (
    <div>
         <Header as='h2' attached='top'>
            <Icon name='arrow left' style={{cursor:"pointer"}}onClick={()=>dispatch(screenChange())}/> AllProducts
            <div className='category-card'>
                {
                    products.length>0 &&products.map((item,id)=>
{
    return (<div className='product-card'>
        <Image src={item.productImages[0] || "https://i.pinimg.com/236x/a8/d4/57/a8d457a99271ce50a4cc537b4dd05e4b.jpg"} style={{width:"121px"}}/>
        <h4>{item.itemDescription}</h4>
        <p style={{fontSize:"10px"}}>{'This Item Has related to something.'}</p>
        </div>
    )
}
                    )
                }
            </div>
         </Header>
    </div>
  )
}

export default ProductScreen;
