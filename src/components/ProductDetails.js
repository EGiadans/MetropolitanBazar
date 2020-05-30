import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        const { match } = this.props;
        axios.get('http://localhost:4000/products/get-product/'+match.params.productId)
            .then(res => {
                this.setState({
                    product: res.data
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
        const {name, description, category, price} = this.state;
        const product = {
            name,
            description,
            category,
            price
        };
        axios.get('http://localhost:4000/products/create-product', product)
            .then( () => {
                this.props.history.push("/feed");
            });
        this.setState({ name: '', description: '', category: '', price: '' });
    };

    showWishList = () => {
        NotificationManager.success('Listo', 'Agregado a tu wishlist');
    };

    render() {
        const { product } = this.state;
        return (
            <>
                <NotificationContainer/>
                <Navbar></Navbar>
                <div className="container mt-5 px-5">
                    <div className="row">
                        <div style={{color: '#1E5D75'}} className="col-sm-8 mt-5">
                            <h1>{product.name}</h1>
                            <h3 className="mt-5"><b>Precio:</b> ${product.price}</h3>
                            <h4 className="mt-3"><b>Categoría: </b><br/>{product.category}</h4>
                            <h4 className="mt-3"><b>Descripción del producto: </b><br/>{product.description}</h4>
                        </div>
                        <div className="col-sm-4 mt-5 mt-5 pt-3">
                            <Carousel style={{backgroundColor:'#2C85A8'}}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 h-50 mx-auto"
                                        src={product.url1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 h-50 mx-auto"
                                        src={product.url2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50 h-50 mx-auto"
                                        src={product.url3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div className="mt-3 text-center">
                                <Button className="btn-success mr-3"> <i className="fas fa-dollar-sign" />
                                    &nbsp;Comprar
                                </Button>
                                <Button onClick={() => this.showWishList()} className="btn-warning"><i className="fas fa-star"/>
                                    &nbsp;Agregar a mi Wishlist
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ProductDetails;