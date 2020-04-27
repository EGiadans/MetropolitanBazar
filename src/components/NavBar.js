import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";

const NavBar = ({searchVisible}) => (
    <Navbar expand="lg" style={{backgroundColor: '#80ffcc'}}>
        <div className="container">
            <Navbar.Brand href="#home">Metropolitan Bazar</Navbar.Brand>
            <div hidden={searchVisible}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/profile">Mi Perfil</Nav.Link>
                        <Nav.Link href="/purchases">Compras</Nav.Link>
                        <Nav.Link href="/sales">Ventas</Nav.Link>
                    </Nav>
                    <Form inline hidden={searchVisible}>
                        <FormControl type="text" placeholder="Buscar un producto..." className="mr-sm-2" />
                        <Button variant="outline-primary">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </div>
    </Navbar>
);
export default NavBar;
