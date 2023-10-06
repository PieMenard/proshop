import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        ${product.price}
      </Card.Text>
    </Card.Body>
  </Card>
  )
};

export default Product;
