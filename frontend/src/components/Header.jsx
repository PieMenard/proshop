import { Navbar, Nav, Container } from 'react-bootstrap'
//import { FaShoppingCart ,FaUser} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <LinkContainer to='/'>
              <Navbar.Brand >Proshop!</Navbar.Brand>
            </LinkContainer>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link >cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link >log in</Nav.Link>
              </LinkContainer>
            </Nav>
        </Container> 
    </Navbar>
  )
}

export default Header
