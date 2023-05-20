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
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <div style={{height:'9vh'}}>
   <HeaderComponent/>
   </div>
  <div className="e-commerce">
    <div><SideBarComponent/></div>
    <div> <CategoriesScreen open={open} setOpen={setOpen}cartDetails={cartDetails} setCartDetails={setCartDetails}/></div>
    <div className="cart-comp"><CartComponent open={open} setOpen={setOpen} cartDetails={cartDetails} setCartDetails={setCartDetails}/></div>
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
