import CartComponent from "./Components/CartComponent";
import HeaderComponent from "./Components/HeaderComponent";
import SideBarComponent from "./Components/SideBarComponent";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { Grid } from 'semantic-ui-react'
import './App.css'
function App() {
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
    <div> <CategoriesScreen/></div>
    <div style={{margin:"19px"}}><CartComponent/></div>
  </div>
    </div>
  );
}

export default App;
