import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addProduct, deleteProduct } from '../redux/productAction';
import CreateProduct from '../modals/CreateProduct';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addProduct }) => {
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseList = () => setShowList(false);
  const handleShowList = () => setShowList(true);
  //add item
  const handleAddProduct = (data) => {
    const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
    if (data.productName && data.productPrice && (data.productQuantity && data.productQuantity >=0) ) {
      addProduct({ productId: uniqueId(),name: data.productName, price: data.productPrice, quantity: data.productQuantity });
      handleClose()
    }else{
      alert('item cannot be empty or quantity must be more than 0')
    }
  };

  return (
    <Container className="mt-5" >
      <Row >
        <Col xs={12}  md={4} lg={4}><h1>Product List</h1></Col>
        <Col > 
          <Button className="m-2 mt-3 m p-2"  onClick={handleShow}>
            Add Product
          </Button>
        </Col>
        <Col > 
          <Link to="/manage-products">
            <Button className=" m-2 mt-3 p-2"  variant="primary" onClick={handleShowList}>
                View Product
            </Button>      
          </Link>
        </Col>
      </Row>
      <Row>
      {show && <CreateProduct show={show} handleClose={handleClose} parentCallback={handleAddProduct}/>}
      {showList && <ManageProduct show={showList} handleClose={handleCloseList} products={products} />}
        {products.length ==0 ?(<div 
        style={{ textAlign: 'center',marginTop:'10rem',fontSize: '4rem',color:'lightblue', display: 'flex' , justifyContent: 'center'}}
        >List Is empty. Why not add product</div>) :null}
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '11rem' }} className="m-2">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: RM {product.price}</Card.Text>
                <Card.Text>Quantity: {product.quantity}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
     
      
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProduct,
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);