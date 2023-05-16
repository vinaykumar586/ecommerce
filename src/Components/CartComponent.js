import React from 'react'
import { Grid, GridColumn, Image } from 'semantic-ui-react'
import "./Cart.css"
function CartComponent() {
  return (
 <Grid columns={3}>
    <Grid.Row>
        <GridColumn width={4}>Products</GridColumn>
        <GridColumn width={4}>Quantity</GridColumn>
        <GridColumn width={4}>Price</GridColumn>
    </Grid.Row>
    
 </Grid>
  )
}

export default CartComponent