import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import axios from "axios";
import UserProfile from "../UserSession";
import { Form } from "react-bootstrap";

class MyAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
            date: '',
            file1: '',
            imgUrl: '',
            array: []
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, description, price, array } = this.state;
        const date = moment().format();
        const formData = new FormData();
        array.forEach((file, i) => {
            formData.append(i, file);
        });
        axios.post('http://localhost:4000/products/image-upload', formData,
            {headers: { 'Content-Type': 'multipart/form-data' }}
        ).then((res) => {
            const product = {
                title,
                description,
                price,
                date,
                imageUrl: res.data[0].url,
                owner: UserProfile.getName('email')
            };
            axios.post('http://localhost:4000/ads/create-ad', product)
                .then(() => {
                    this.setState({ name: '', description: '', category: '', price: '' });
                    this.props.history.push("/feed");
                });
        })
    };

    onInputChange = (e) => {
        const { id, value } = e.target;
        const change = { [id]: value };
        this.setState(change);
    };

    handleChange = (e) => {
        const { array } = this.state;
        const newImage = e.target.files[0];
        array.push(newImage);
        this.setState(array);
    };

    render() {
        return(
            <>
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="my-5"><i className="fas fa-ad" /> Crea aqui tu anuncio</h1>
                            <h4 className="pb-3">Esta sección te permite crear anuncios clasificados para promocionar un producto que quieras poner
                                a la venta </h4>

                            <Form>
                                <Form.Group controlId = 'title'>
                                    <Form.Label><b>Nombre del producto</b></Form.Label>
                                    <Form.Control className='col-md-3' type="text" placeholder="" onChange={this.onInputChange} />
                                </Form.Group>
                                <Form.Group controlId = 'description'>
                                    <Form.Label><b>Descripción</b></Form.Label>
                                    <Form.Control as="textarea" placeholder="" onChange={this.onInputChange} />
                                </Form.Group>
                                <Form.Group controlId = 'price'>
                                    <Form.Label><b>Precio de venta</b></Form.Label>
                                    <Form.Control className='col-md-3' type="text" placeholder="" onChange={this.onInputChange} />
                                </Form.Group>
                                <Form.Group controlId = 'image'>
                                    <Form.Label><b>Imagen del producto</b></Form.Label>
                                    <Form.Control type="file" placeholder="" onChange={this.handleChange.bind(this)} />
                                </Form.Group>
                                <Button className="btn-primary" onClick={this.onSubmit}>Cambiar</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MyAds;
