import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
import { getSubCategories } from '../Services/Categoryaction';
function CardComponent({item,image,title,setActiveId,activeId}) {
const dispatch = useDispatch();
let cate=null
// const CatgorySelect =(e)=> {
//   if(cate!==null && cate.classList.contains("active-cate")){
//     cate.classList.remove("active-cate")
// }
// e.target.classList.add("active-cate")
// cate=e.target;
// }
const activeElement={
  border: '3px solid #e7472e',
  borderRadius: '20%'
}
  return (
    <div className='card'  onClick={(e)=>{dispatch(getSubCategories(item.categoryId)); setActiveId(item.categoryId)}}>
        <img style={item.categoryId==activeId? activeElement:{}} src={image} width='120'/>
        <div className='category-name'>{title}</div>
    </div>
  )
}

export default CardComponent; 