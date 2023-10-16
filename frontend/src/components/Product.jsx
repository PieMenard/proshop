import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Link to={`/api/products/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
      <Card.Body>
        <Link to={`/api/products/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>
        <Card.Text>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
  )
};

export default Product;
