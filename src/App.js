import React,{useState} from "react";
import CartComponent from "./Components/CartComponent";
import HeaderComponent from "./Components/HeaderComponent";
import SideBarComponent from "./Components/SideBarComponent";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { useSelector } from "react-redux";

import { Grid,Header } from 'semantic-ui-react'
import './App.css'
import SubCardComponent from "./Screens/SubCardComponent";
function App() {
  const[cartDetails,setCartDetails]=useState([]);
  const subCategories = useSelector((state)=>state.category.subCategories)
  const productScreen=useSelector((state)=>state.category.productScreen)

  return (
    <div className="App">
   <HeaderComponent/>
   {/* <Grid columns={3}>
    <Grid.Row>
   <Grid.Column> <SideBarComponent/></Grid.Column>
   <Grid.Column>  <CategoriesScreen/></Grid.Column>
   <Grid.Column> <CartComponent/></Grid.Column>
  
 
  
   </Grid.Row>
   </Grid> */}
  
  <div className="e-commerce">
    <div><SideBarComponent/></div>
    <div> <CategoriesScreen cartDetails={cartDetails} setCartDetails={setCartDetails}/></div>
    <div style={{margin:"19px"}}><CartComponent cartDetails={cartDetails} setCartDetails={setCartDetails}/></div>
  </div>

{/* {
  productScreen && (<Header>
<div className='category-card'>
    {
        subCategories.length>0 ? (subCategories.map((item,id)=>
        <SubCardComponent item={item} image={item.subCategoryImageURL} title={item.subCategoryName}/>)):
        <h1>There is No subCategories</h1>
    }
   </div>
</Header>
)} */}
    </div>
  );
}

export default App;
