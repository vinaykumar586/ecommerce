
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { Modal,Button,Divider,Image } from 'semantic-ui-react'
import { screenChange } from '../Services/Categoryaction'
function EditProductModal({cartDetails,setCartDetails,modal,setModal,editData}) {
    const[pack,setPack]=useState(editData.package)
    const[color,setColor]=useState(editData.color)
    const [value,setValue]=useState(editData.quantity)
    const [price,setPrice]=useState(editData.price)
    const productScreen=useSelector((state)=>state.category.productScreen)
    const finalCartDetails=useSelector((state)=>state.category.finalCartDetails)
    const products =useSelector((state)=>state.category.products);
    console.log(products,editData)

    let item = products.find((itm,id)=>itm.productId==editData.productId);
    let colorDescriptions = item.variants.length>0 ? item.variants.map((it)=>it.colorDescription) :[];
colorDescriptions= [...new Set(colorDescriptions)]
let packageDescription = item.variants.length>0 ? item.variants.map((it)=>it.packingDescription): [];
packageDescription = [...new Set(packageDescription)]
const dispatch=useDispatch();
const handleChange = (e)=>{
    setValue(e.target.value)
    setPrice(e.target.value*item.variants[0].grossPrice)

console.log(editData)
    // setProductDetails({...productDetails,[e.target.name]:e.target.value, price:item.variants[0].grossPrice*e.target.value})
 
};
const updateItem=()=>{
const data ={
    productName:editData.itemDescription,
    image:editData.image || "https://i.pinimg.com/236x/a8/d4/57/a8d457a99271ce50a4cc537b4dd05e4b.jpg",
    quantity:value,
    color:color,
    package:pack,
    price:price,
    id:editData.id,
    productId:editData.productId
 }
 let d = cartDetails.map((item,id)=>{
    if(id==editData.editId){
        return data
    } else {
        return item
    }
 })
 setCartDetails(d);
 setModal(!modal)
 dispatch(screenChange())
}
const activeElement={
    background:'#f79999'
}
  return (
    <Modal
    closeIcon
      centered={false}
      open={modal}
      onClose={() => setModal(!modal)}
      onOpen={() => setModal(modal)}
    >
        <div className='modal'>
        <div style={{width:"33vw", padding:'20px'}}>
      <h2>{item.itemDescription}</h2>
      
      <Image centered src={item.productImages[0] || "https://i.pinimg.com/236x/a8/d4/57/a8d457a99271ce50a4cc537b4dd05e4b.jpg"} style={{width:"121px"}}/>
    <p style={{ fontSize:'15px'}}>{`#${item.itemNumber}`}</p>
    <div>
        <span style={{fontWeight:"bolder", float:"left", fontSize:'25px'}}>{item.itemDescription}</span>
        <span style={{fontWeight:"bolder", float:"right", fontSize:'25px'}}>{`${item.currency.symbol} ${item.variants[0].grossPrice}`}</span>
    </div>
  
    <p style={{display:"inline-block"}}>This is an example of expanded content that will cause the modal's
            dimmer to scroll.</p>
        
        <h3>Please Select Color Description</h3>
        <div className='colors-map'>
        {
            colorDescriptions.length>0 && colorDescriptions.map((item)=>
            
                <span className= "color-des" style={color===item? activeElement:{} } onClick={(e)=>setColor(e.target.innerText)}>{item}</span>
            
            )
        }
        </div>
        <h3>Please Select Pacakage Description</h3>
        <div className='pacakage-map'>
        {
            packageDescription.length>0 && packageDescription.map((item)=>
            
                <span  className= "color-des" style={pack===item? activeElement:{} } onClick={(e)=>setPack(e.target.innerText)}>{item}</span>
            
            )
        }
        </div>
        <p>Enter Quantity</p>
        <input type="number"  min={1}value={value} defaultValue={1} name="quantity" onChange={(e)=>{handleChange(e)}}/>
       {
        value>=1 &&(
<Button style ={{display:"block"}}negative color="orange" onClick={()=>updateItem()}>update</Button>
        ) 
       } 
   
      </div>
    
      </div>
      </Modal>
  )
}

export default EditProductModal