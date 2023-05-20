import React from 'react'
import {Header,Image,Label,Input,Item,Icon } from 'semantic-ui-react'
import "./Header.css"
function HeaderComponent() {
  return (
    <Header className='header-ui'>
    <Label className='logo'>
   <Image  src={require("./../Images/At.png")}/> A.T Links</Label>
   <Input icon="search" iconPosition='left' placeholder="search" className='header-input'/>
   <Item.Group>
   <Item>
    <Item.Image class ="header-image"src={require("./../Images/At.png")} width="20" height="20"></Item.Image>
    <Item.Content style={{fontSize: '0.8rem'}}>
        <Item.Header>Vinaykumar</Item.Header>
        <Item.Meta>
          <span className='price'>vinay@gmail.com</span>
        </Item.Meta>
      </Item.Content>
   </Item>
   </Item.Group>
    </Header>
  )
}

export default HeaderComponent