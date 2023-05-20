import React from 'react'
import { Modal,Button } from 'semantic-ui-react'

function ConfirmationModel({conf,setConf,price}) {
    console.log(conf)
  return (
    <Modal
    centered={false}
    onClose={() => setConf(!conf)}
    onOpen={() => setConf(conf)}
  >
    <Modal.Header>Thank you!</Modal.Header>
    <Modal.Content>
      <Modal.Description>

       Your Items Ordered Sucessfully
      </Modal.Description>
     
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => setConf(!conf)}>OK</Button>
    </Modal.Actions>
  </Modal>
  )
}

export default ConfirmationModel