import { Row, Col } from "react-bootstrap"
import products from "../products"
import Product from "../components/Product"

const HomePage = () => {
  return (
    <>
    <h1>Lastest products</h1>
    <Row>
        {products.map(product => 
            <Col key = {product._id} sm={12} md={6} lg={4}>
                <Product product={product}/>
            </Col>
        )}
    </Row>
    </>
  )
}

export default HomePage