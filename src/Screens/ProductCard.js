import React,{useState} from 'react'
import './Card.css';
import ProdcutModal from './ProductModal';
import { Image } from 'semantic-ui-react';

function ProductCard({item,cartDetails,setCartDetails}) {
    const [open, setOpen] = useState(false)
  return (
    <>
    <ProdcutModal open={open} setOpen={setOpen} item={item}  cartDetails={cartDetails} setCartDetails={setCartDetails}/>

    <div className='product-card' onClick={() => setOpen(!open)}>
        <Image src={item.productImages[0] || "https://i.pinimg.com/236x/a8/d4/57/a8d457a99271ce50a4cc537b4dd05e4b.jpg"} style={{width:"121px"}}/>
        <h4>{item.itemDescription}</h4>
        <p style={{fontSize:"10px"}}>{'This Item Has related to something.'}</p>
        </div>
        </>
  )
}

export default ProductCard