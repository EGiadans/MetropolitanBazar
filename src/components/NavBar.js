import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";

const NavBar = ({searchVisible, onChangeMethod, onClickMethod}) => (
    <Navbar fixed='top' expand="lg" style={{backgroundColor: '#2C85A8'}}>
        <div className="container">
            <Navbar.Brand style={{color: 'white'}} href="/feed">Metropolitan Bazar</Navbar.Brand>
            <div hidden={searchVisible}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: 'white'}} href="/profile">Mi Perfil</Nav.Link>
                        <Nav.Link style={{color: 'white'}} href="/purchases">Compras</Nav.Link>
                        <Nav.Link style={{color: 'white'}} href="/sales">Ventas</Nav.Link>
                    </Nav>
                    <Form inline hidden={searchVisible}>
                        <FormControl type="text" placeholder="Buscar un producto..." className="mr-sm-2" onChange={onChangeMethod}/>
                        <Button variant="outline-dark" onClick={onClickMethod}>Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </div>
        </div>
    </Navbar>
);
export default NavBar;
