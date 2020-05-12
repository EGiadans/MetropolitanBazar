import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import moment from "moment";

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: '',
            price: '',
            date: '',
            sales: [],
            file1: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    sales: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        const change = { [name]: value };
        this.setState(change);
    };


    onSubmit = (e) => {
        e.preventDefault();
        const {name, description, category, price, file1} = this.state;
        const formData = new FormData();
        formData.append('image',file1);

        axios.post('http://localhost:4000/products/image-upload',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                //res => res.json()
                console.log(res);
            });

        const date = moment().format();
        const product = {
            name,
            description,
            category,
            price,
            date
        };
        /*
        axios.post('http://localhost:4000/products/create-product', product)
            .then( () => {
                this.props.history.push("/feed");
            });
        this.setState({ name: '', description: '', category: '', price: '' });
         */
    };

    handleChange = (e) => {
        this.setState({file1: e.target.files[0]});
        // do your other "pre-submitted" logic here
    };

    render() {
        const { name, description, category, price, sales } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 py-3">
                            <h1>Realizar una nueva venta</h1>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-wrapper" style={{width: '70%'}}>
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

                                    <Form.Group controlId="Price">
                                        <Form.Label>Imagen 1</Form.Label>
                                        <Form.Control name="file1" type="file" onChange={this.handleChange.bind(this)} />
                                    </Form.Group>

                                    <Button variant="success" size="lg" type="submit">
                                        ¡Poner a la venta!
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-wrapper">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Fecha</th>
                                    <th>Cantidad</th>

                                </tr>
                                </thead>
                                <tbody>
                                {
                                    sales.map((sale) => {
                                        return (
                                            <tr>
                                                <td>{sale.name}</td>
                                                <td>{sale.description}</td>
                                                <td>{sale.date}</td>
                                                <td>${sale.price}</td>
                                            </tr>
                                        );
                                    })
                                }


                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default Sales;
