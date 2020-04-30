import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom'
class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: '',
            price: ''
        };
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        const change = { [name]: value };
        this.setState(change);
    };


    onSubmit = (e) => {
        e.preventDefault();
        const {name, description, category, price} = this.state;
        const product = {
            name,
            description,
            category,
            price
        };
        axios.post('http://localhost:4000/products/create-product', product)
            .then( () => {
                this.props.history.push("/feed");
            });
        this.setState({ name: '', description: '', category: '', price: '' });
    };

    render() {
        const { name, description, category, price } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 py-3">
                            <h1>Realizar una nueva venta</h1>
                        </div>
                        <div className="col-sm-9">
                            <div className="form-wrapper" style={{width: '80%'}}>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Nombre del producto</Form.Label>
                                        <Form.Control name="name" type="text" value={name} onChange={this.onInputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="Description">
                                        <Form.Label>Descripción</Form.Label>
                                        <Form.Control name="description" type="text" value={description} onChange={this.onInputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="Category">
                                        <Form.Label>Categoría</Form.Label>
                                        <Form.Control name="category" type="text" value={category} onChange={this.onInputChange} />
                                    </Form.Group>

                                    <Form.Group controlId="Price">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control name="price" type="text" value={price} onChange={this.onInputChange} />
                                    </Form.Group>

                                    <Button variant="success" size="lg" type="submit">
                                        ¡Poner a la venta!
                                    </Button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <img src="https://support.dotdigital.com/hc/article_attachments/360001399539/CP_upload_template2.png"
                            style={{maxWidth: "400px"}}>
                            </img>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default Sales;
