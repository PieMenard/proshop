import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/product${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
    <Card.Body>
      <Link to={`/product/product${product._id}`}>
        <Card.Title>{product.name}</Card.Title>
      </Link>
      <Card.Text>
        ${product.price}
      </Card.Text>
    </Card.Body>
  </Card>
  )
};

export default Product;
