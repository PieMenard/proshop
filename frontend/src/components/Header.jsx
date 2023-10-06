import { Navbar, Nav, Container } from 'react-bootstrap'
//import { FaShoppingCart ,FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='/'>Proshop!</Navbar.Brand>
            <Nav className='ms-auto'>
                <Nav.Link href='/cart'>cart</Nav.Link>
                <Nav.Link href='/login'>log in</Nav.Link>
            </Nav>
        </Container> 
    </Navbar>
  )
}

export default Header
