import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';
import { deleteProduct, editProduct } from '../redux/productAction';
import { Link, useNavigate } from "react-router-dom";
import arrow from '../assets/arrow.png'
const ManageProducts = ({ products, deleteProduct, editProduct, history }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const navigateTo = useNavigate();
  const [editedProductQuantity, setEditedProductQuantity] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
  };

   const handleEditProduct = (productId) => {
    if (editedProductQuantity.trim() !== '' &&   editedProductQuantity>=0 ) {
      editProduct(productId, editedProductQuantity);
      setIsEditing(null);
      setEditedProductQuantity('');
    }else{
      alert('Quantity cannot be lesser than 0 or empty')
    }
  };

  const handleEditInputChange = (e) => {
    setEditedProductQuantity(e.target.value);
  };

  const handleStartEditing = (productQuantity) => {
    setEditedProductQuantity(productQuantity);
    setIsEditing(true);
  };

  const handleEdit = (productId) =>{
    setIsEditing(productId)

  }

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Image className="m-3 bg-white" width={50} onClick={()=>navigateTo('/')}  src={arrow} 
          rounded />
        </Col>
        <Col><h1>Manage Products</h1></Col>
      </Row>
      <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={6} lg={6}>
              <Card className='m-2' style={{ width: '15rem' }}>
                <Card.Body>
                  {isEditing === product.productId ? (
                    <div>
                      <h3 onClick={() => handleStartEditing(product.name)}>{product.name}</h3>
                      <p>Price: RM{product.price}</p>
                      <input
                        type="number "
                        value={editedProductQuantity}
                        placeholder='Quantity'
                        onChange={handleEditInputChange}
                        // onBlur={() => handleEditProduct(product.productId)}
                        autoFocus
                      />
                      <Button onClick={() => handleEditProduct(product.productId)}>Save</Button>
                    </div>
                  ) : (
                    <div>
                      <h3 onClick={() => handleStartEditing(product.name)}>{product.name}</h3>
                      <p>Price: RM{product.price}</p>
                      <p>Quantity: {product.quantity}</p>
                      <Button className='m-1' variant="danger" onClick={() => handleDeleteProduct(product.productId)}>Delete</Button>
                      <Button className='m-1' variant="primary" onClick={() => handleEdit(product.productId)}>Edit</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  deleteProduct,
  editProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);