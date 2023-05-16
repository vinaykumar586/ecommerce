import React from 'react'
import { Grid, Icon, Label, Image } from 'semantic-ui-react'
import './Sidebar.css'
function SideBarComponent() {
  return (
 <div className='sidebar'>
      <Label className='logo' >
   <Image  src={require("./../Images/At.png")} centered/> A.T Links</Label>
<Label className='sidbar-label'> <Icon name="dashboard" /> Dashboard</Label>
<Label className='sidbar-label'> <Icon name="product hunt" /> AllProducts</Label>
<Label className='sidbar-label'> <Icon name="like" /> Favourites</Label>
<Label className='sidbar-label'> <Icon name="cart" /> Items</Label>
<Label className='sidbar-label'> <Icon name="theme" /> Themes</Label>
 </div>
  )
}

export default SideBarComponent
