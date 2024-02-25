import React, { useState } from 'react'
import { Modal, Button, Row, Col, Container} from 'react-bootstrap'
import { addProduct } from '../redux/productAction';

function CreateProduct({show, handleClose, parentCallback}) {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const createItem=()=>{
    let item ={
      productName: productName,
      productPrice: productPrice,
      productQuantity: productQuantity
    }
    parentCallback(item)
  }

  return (
    <Modal centered show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Add Products</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container >
         <Row className="text-center">
          <Col className='m-2'> 
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Col>
          <Col className='m-2'> 
            <input
              type="number"
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="number"
              placeholder="Quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </Col>
        </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={createItem}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateProduct