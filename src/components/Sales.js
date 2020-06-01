import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import moment from "moment";
import UserProfile from "../UserSession";
import Spinner from "react-bootstrap/Spinner";

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
            file1: '',
            array: [],
            loading: false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/my-sales/'+UserProfile.getName('email'))
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
        const {name, description, category, price, array} = this.state;
        this.setState({ loading: true });
        const date = moment().format();
        const formData = new FormData();
        array.forEach((file, i) => {
            formData.append(i, file);
        });
        axios.post('http://localhost:4000/products/image-upload', formData,
            {headers: { 'Content-Type': 'multipart/form-data' }}
        ).then((res) => {
            const product = {
                name,
                description,
                category,
                price,
                date,
                url1: res.data[0].url,
                url2: res.data[1].url,
                url3: res.data[2].url,
                owner: UserProfile.getName('email'),
                purchasedBy: '',
                visibility: 1
            };
            axios.post('http://localhost:4000/products/create-product', product)
                .then(() => {
                    this.setState({ name: '', description: '', category: '', price: '', loading: false });
                    this.props.history.push("/feed");
                });
        });
    };

    handleChange = (e) => {
        const { array } = this.state;
        const newImage = e.target.files[0];
        array.push(newImage);
        this.setState(array);
    };

    redirect = () => {
      this.props.history.push('/login');
    };

    render() {
        const { name, description, category, price, sales, loading } = this.state;
        return (
            <>
                <Navbar redirect={this.redirect} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mt-5 py-3">
                                <h1>Realizar una nueva venta</h1>
                                <p className="pr-5 text-justify">Introduce los detalles del producto que deseas poner a la venta
                                y haz click en el botón <b>¡Poner a la venta!</b> cuando estés seguro que la
                                información es correcta. </p>
                            </div>
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

                                    <Form.Group controlId="Image 1">
                                        <Form.Label>Imagen 1</Form.Label>
                                        <Form.Control name="file1" type="file" onChange={this.handleChange.bind(this)} required/>
                                    </Form.Group>

                                    <Form.Group controlId="Image 2">
                                        <Form.Label>Imagen 2</Form.Label>
                                        <Form.Control name="file2" type="file" onChange={this.handleChange.bind(this)} required/>
                                    </Form.Group>

                                    <Form.Group controlId="Image 3">
                                        <Form.Label>Imagen 3</Form.Label>
                                        <Form.Control name="file3" type="file" onChange={this.handleChange.bind(this)} required/>
                                    </Form.Group>

                                    <Button variant="success" size="lg" type="submit" disabled={loading}>
                                        ¡Poner a la venta!&nbsp;&nbsp;
                                        {loading ?
                                            <Spinner animation="border" role="status" variant="light">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                            : null
                                        }
                                    </Button>

                                </Form>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="text-center mt-5 py-3">Los productos que he puesto a la venta</h2>
                            <div className="table-wrapper">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Imagen</th>
                                        <th>Fecha de la publicación</th>
                                        <th>Cantidad</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sales.map((sale) => {
                                            return (
                                                <tr>
                                                    <td>{sale.name}</td>
                                                    <td>
                                                        <img
                                                            src={sale.url1}
                                                            style={{
                                                                maxWidth: '100%'
                                                            }}/>
                                                    </td>
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
                </div>

            </>
        );
    }
}
export default Sales;
