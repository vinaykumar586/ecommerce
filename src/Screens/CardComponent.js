import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
import { getSubCategories } from '../Services/Categoryaction';
function CardComponent({item,image,title}) {
const dispatch = useDispatch();
let cate=null
// const CatgorySelect =(e)=> {
//   if(cate!==null && cate.classList.contains("active-cate")){
//     cate.classList.remove("active-cate")
// }
// e.target.classList.add("active-cate")
// cate=e.target;
// }
  return (
    <div className='card' onClick={(e)=>{dispatch(getSubCategories(item.categoryId)); CatgorySelect(e)}}>
        <img src={image} style={{width:"120px"}}/>
        <div className='category-name'>{title}</div>
    </div>
  )
}

export default CardComponent; 