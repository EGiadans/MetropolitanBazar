import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    redirectTo = (productId) => {
        this.props.history.push({
            pathname: `/product/${productId}`,
            state: {
                from: '/feed'
            }
        })
    };

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    products: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    showWishList = () => {
      //NotificationManager.warning('Listo', 'Agregado a tu wishlist', 10000);
        NotificationManager.success('Listo', 'Agregado a tu wishlist');
    };

    render() {
        const { products } = this.state;
        return (
            <>
                <NotificationContainer/>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 bg-light text-center" style={{borderBlock: '10', height: '100vh'}}>
                            <h2 className="my-5">Anuncios clasificados</h2>
                            <img alt="img1" style={{ maxWidth: '100%'}}
                                 src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv-jpg.webp">
                            </img>
                            <h4>Xbox one usado</h4>
                            <p>500gb</p>
                            <p>Un control incluido</p>
                            <p style={{fontWeight: 'bold'}}>$4000</p>
                        </div>
                        <div className="col-sm-9 ml-5">
                            <h1 className="my-5">¡Bienvenido al Bazar!</h1>
                            <h2 className="my-3">Productos que te pueden interesar...</h2>
                            <div className="table-wrapper">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Categoría</th>
                                            <th>Precio</th>
                                            <th>Imagenes del producto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {products.map((product) => {
                                        return (
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.category}</td>
                                                <td>${product.price}</td>
                                                <td>
                                                    <img alt="img" src={product.url1} style={{maxWidth: '30%'}}/>&nbsp;&nbsp;
                                                    <img alt="img" src={product.url2} style={{maxWidth: '30%'}}/>&nbsp;&nbsp;
                                                    <img alt="img" src={product.url3} style={{maxWidth: '30%'}}/>
                                                </td>
                                                <td>
                                                    <Button onClick={() => this.redirectTo(product._id)}>Ver este producto</Button>
                                                    <Button onClick={() => this.showWishList()} className="btn-warning mt-2"><i className="fas fa-star"/>
                                                        &nbsp;Agregar a Wishlist</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
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
export default Profile;
