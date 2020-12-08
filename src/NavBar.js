import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './NavBar.css';

const NavbarMenu = () => {
    return (
        <Navbar className='navbar' bg='light' expand="md">
            <Navbar.Brand className='brand' href="/">MartoStore</Navbar.Brand>
            <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Preventas</Nav.Link>
                    <Nav.Link href="#">PlayStation 5</Nav.Link>
                    <Nav.Link href="#">Xbox Series X</Nav.Link>
                    <NavDropdown title="Retro" id="responsive-nav-dropdown">
                        <NavDropdown.Item href="#">Gameboy Color</NavDropdown.Item>
                        <NavDropdown.Item href="#">Gameboy Advance</NavDropdown.Item>
                        <NavDropdown.Item href="#">Nintendo 64</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Vendé tus juegos!</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <Button variant='info' type="submit">Log In</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu;