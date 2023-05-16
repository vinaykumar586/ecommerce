import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
import { getProducts } from '../Services/Categoryaction';
function SubCardComponent({item,image,title}) {
const dispatch = useDispatch();
  return (
    <div className='card' onClick={()=>dispatch(getProducts(item.subCategoryId))}>
        <img src={image} style={{width:"151px"}}/>
        <div className='category-name'>{title}</div>
    </div>
  )
}

export default SubCardComponent; 