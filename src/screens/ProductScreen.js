import React from 'react';
import { NavLink, Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import BookScreen from '../components/Rating';
import books from '../books';
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';

function ProductScreen() {
    const {id} = useParams();
    const book = books.find(b => b._id === Number(id));
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
            <Image src={book.image} alt={book.name} fluid/>
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{book.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={book.rating} text={`${book.numReviews} reviews`} color={"#f8e825"}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Price: ${book.price}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>{book.description}</p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${book.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Status:
                            </Col>
                            <Col>
                                <strong>{book.countInStock ? "Available": "Not available"}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn btn-block mx-auto d-block btn-info" type="button" disabled={book.countInStock === 0}>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen;
