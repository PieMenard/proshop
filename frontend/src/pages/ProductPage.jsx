import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Image,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();

  useEffect(()=>{
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${productId}`)
      setProduct(data)
    }
  fetchProduct();
  },[productId])
 
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock === 0 ? "Out Of Stock" : "In Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
