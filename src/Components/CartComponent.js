import React,{useState} from 'react'
import { Grid, GridColumn, Image,Confirm,Icon } from 'semantic-ui-react';

import "./Cart.css"
import { useSelector,useDispatch } from 'react-redux';
import { finalCartData, getProducts } from '../Services/Categoryaction';
import EditProductModal from '../Screens/EditProductModal';
import ConfirmationModel from './ConfirmationModel';
function CartComponent({cartDetails,setCartDetails,open,setOpen}) {
  const [modal,setModal]=useState(false);
  const[conf,setConf]=useState(false)
  const[editData,setEditData]=useState({})
  const dispatch=useDispatch();
  const productScreen=useSelector((state)=>state.category.productScreen)
  const products=useSelector((state)=>state.category.products)
  console.log(conf)

const removeItem =(id)=>{
  setCartDetails(cartDetails.filter((item,i)=>i!==id));
}
const finalCart = ()=>{
  dispatch(finalCartData(cartDetails));
  setOpen(false)

}
const editItem=(data,id)=>{
  const data1 ={...data, editId:id}
  setEditData(data1)

  dispatch(getProducts(data.id));
  setModal(!modal)
}
let totalPrice = 0;
cartDetails.map((item)=>{
  totalPrice+=item.price
})
// totalPrice=cartDetails.reduce((acc,item)=>acc+item.price,0)
const confirmOrder=()=>{
  setConf(!conf)
  setCartDetails([])
}
  return (
    <>
    {
      editData && modal && products.length>0 &&(
        <EditProductModal editData={editData} modal={modal} setModal={setModal} setCartDetails={setCartDetails} 
        cartDetails={cartDetails} />
      )
    }
  {
    conf &&(
      <ConfirmationModel conf={conf} setConf={setConf} price={totalPrice}/>
    )
  }
 <Grid columns={3}>
 
    <Grid.Row className='header-sticky'>

        <GridColumn width={4}>Products</GridColumn>
        <GridColumn width={4}>Quantity</GridColumn>
        <GridColumn width={4}>Price</GridColumn>
        { cartDetails.length>0 && productScreen &&(
          <GridColumn width={4}>Edit</GridColumn>

        )
}
    </Grid.Row>
   
    {
      cartDetails.length>0 && cartDetails.map((item,id)=>
        <Grid.Row>
        <GridColumn width={4}><Image style={{height:"10vh"}}src={item.image}/>{item.productName}</GridColumn>
        <GridColumn width={4}>{item.quantity}</GridColumn>
        <GridColumn width={4}>{item.price} 
        {productScreen&&(
          <Icon name="remove" color="red" onClick={()=>{removeItem(id)}}/>
           

        )
        }
        {
          !productScreen && (
            <Icon name="edit" color="red" onClick={()=>editItem(item,id)}/>
          )
}</GridColumn>
    </Grid.Row>
      )
    }
    
{
  cartDetails.length<=0 &&(
    <div style={{textAlign:"center", fontSize:"30px"}}>
      <span><Icon name="shopping cart"/></span>
      Items Not Added yet
    </div>
  )
}
 </Grid>
 <div style={{position:"relative",  margin:'10px'}}>
  
  {
   cartDetails.length>0&& !productScreen &&(
    <div>
    <div>
    <span >Items total</span>
    <span style={{float:'right'}}>{totalPrice}</span>
  </div>
  <div>
    <span >GST total</span>
    <span style={{float:'right'}}>{2000}</span>
  </div>
  <div>
    <span >SGST total</span>
    <span style={{float:'right'}}>200</span>
  </div>
  <hr/>
  <div>
    <span >Order Total</span>
    <span style={{float:'right'}}>{totalPrice}</span>
  </div>
  </div>
   )
  }
  
{
  productScreen && (
    <button className='addcart-btn' onClick={()=>{ finalCart()}} disabled={cartDetails.length<=0}>Add To Cart</button>
  )
}
{
!productScreen && cartDetails.length>0&& (
  <>
  <button className='place-order' onClick={()=>setConf(!conf)}>Place Order</button>
  <Confirm open={conf}
  onCancel={()=>setConf(!conf)}
  content="Your Items Ordered Sucessfully"
  onConfirm={()=>confirmOrder()}/>
  
  </>
)
}
{
  cartDetails.length>0&&(
    <button className='clear-btn'  onClick={()=>{setCartDetails([]); setConf(false)}}>Clear cart</button>
  
  )
}
 
  </div>
 </>
  )
}

export default CartComponent;