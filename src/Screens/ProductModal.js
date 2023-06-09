import React,{useState} from 'react'
import CartComponent from './../Components/CartComponent'
import { Button, Modal,Image,Divider } from 'semantic-ui-react'
import "./ProductModal.css";
function ProdcutModal({open,setOpen,item,cartDetails,setCartDetails}) {
 console.log(cartDetails)
 
 const[productDetails,setProductDetails]=useState({
    productName:item.itemDescription,
    image:item.productImages[0] || "https://i.pinimg.com/236x/a8/d4/57/a8d457a99271ce50a4cc537b4dd05e4b.jpg",
    quantity:1,
    color:"",
    package:"",
    price:item.variants[0].grossPrice,
    id:item.subCategoryId,
    productId:item.productId
 });
 const [pack,setPack]=useState(null)
 const[clr,setClr]=useState(null)
let colorDescriptions = item.variants.map((it)=>it.colorDescription);
colorDescriptions= [...new Set(colorDescriptions)]
let packageDescription = item.variants.map((it)=>it.packingDescription);
packageDescription = [...new Set(packageDescription)]

const colorSelection=(e,val)=>{
  setProductDetails({...productDetails,color:e.target.innerText})

    if(clr!==null && clr.classList.contains("active")) {
        console.log(clr.classList[1], clr[0])
      clr.classList.remove("active")
        // Remove .active CSS Class
      }
    e.target.classList.add('active');
    setClr(e.target);
  
      
      
}

const packageSelection =(e,val)=>{
  setProductDetails({...productDetails,package:e.target.innerText})

  console.log(e,val)
    if(pack!==null && pack.classList.contains("active-package")){
        pack.classList.remove("active-package")
    }
    e.target.classList.add("active-package")
    setPack(e.target);
}
const addToCart =()=>{
  
  if( pack!==null && pack.classList.contains("active-package")){
    pack.classList.remove("active-package")
    setPack(null)
}
if( clr!==null && clr.classList.contains("active")) {
  console.log(clr.classList[1], clr[0])
clr.classList.remove("active")
setClr(null)


}
  setCartDetails([...cartDetails,productDetails])

}
const handleChange = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value, price:item.variants[0].grossPrice*e.target.value})
 
};

  return (
    <Modal
    closeIcon
      centered={false}
      open={open}
      onClose={() => setOpen(!open)}
      onOpen={() => setOpen(open)}
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
            
                <span className= "color-des" onClick={(e,item)=>colorSelection(e,item)}>{item}</span>
            
            )
        }
        </div>
        <h3>Please Select Pacakage Description</h3>
        <div className='pacakage-map'>
        {
            packageDescription.length>0 && packageDescription.map((item)=>
            
                <span onClick={(e,item)=>packageSelection(e,item)} className= "color-des" >{item}</span>
            
            )
        }
        </div>
        <p>Enter Quantity</p>
        <input type="number"  min={1}value={productDetails.quantity} defaultValue={1} name="quantity" onChange={(e)=>{handleChange(e)}}/>
       {
        productDetails.quantity>=1 &&(
<Button style ={{display:"block"}}negative color="orange" onClick={()=>{addToCart()}}>Add</Button>
        ) 
       } 
   
      </div>
      <Divider vertical/>
      <div style={{padding:"10px"}}>
        <CartComponent open={open} setOpen={setOpen}cartDetails={cartDetails} setCartDetails={setCartDetails}/>
      </div>
      </div>
      <Modal.Actions>
        <Button style ={{display:"block"}}negative onClick={() => setOpen(!open)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  )
      }

export default ProdcutModal;