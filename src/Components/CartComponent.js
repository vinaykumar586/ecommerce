import React from 'react'
import { Grid, GridColumn, Image,Button,Icon } from 'semantic-ui-react';

import "./Cart.css"
import { useSelector } from 'react-redux';
function CartComponent({cartDetails,setCartDetails}) {
  const productScreen=useSelector((state)=>state.category.productScreen)

  return (
    <>
 <Grid columns={3}>
    <Grid.Row>
        <GridColumn width={4}>Products</GridColumn>
        <GridColumn width={4}>Quantity</GridColumn>
        <GridColumn width={4}>Price</GridColumn>
    </Grid.Row>
    {
      cartDetails.length>0 && cartDetails.map((item)=>
        <Grid.Row>
        <GridColumn width={4}><Image style={{height:"10vh"}}src={item.image}/>{item.productName}</GridColumn>
        <GridColumn width={4}>{item.quantity}</GridColumn>
        <GridColumn width={4}>{item.price} <Icon name="remove" color="red"/></GridColumn>
    </Grid.Row>
      )
    }
  

 </Grid>
 <div style={{position:"relative", float:"right",  margin:'10px'}}>
 <button style={{color:"green"}} >Add To Cart</button>
  <button style={{color:"red"}} onClick={()=>{setCartDetails([])}}>Clear cart</button>
  </div>
 </>
  )
}

export default CartComponent;