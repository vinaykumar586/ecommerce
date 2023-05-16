import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
import { getSubCategories } from '../Services/Categoryaction';
function CardComponent({item,image,title}) {
const dispatch = useDispatch();
  return (
    <div className='card' onClick={()=>{dispatch(getSubCategories(item.categoryId))}}>
        <img src={image} style={{width:"120px"}}/>
        <div className='category-name'>{title}</div>
    </div>
  )
}

export default CardComponent; 