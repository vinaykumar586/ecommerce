import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
import { getProducts } from '../Services/Categoryaction';
function SubCardComponent({item,image,title,subId,setSubId}) {
const dispatch = useDispatch();
const activeElement={
  border: '3px solid #e7472e',
  borderRadius: '20%'
}
  return (
    <div className='card' onClick={()=>{dispatch(getProducts(item.subCategoryId))}}>
        <img src={image} width="136" style={subId==item.subCategoryId?activeElement :{}}/>
        <div className='category-name'>{title}</div>
    </div>
  )
}

export default SubCardComponent; 