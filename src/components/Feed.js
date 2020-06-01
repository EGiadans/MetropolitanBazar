import React from "react";
import Navbar from "./NavBar";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Pagination, Card } from "react-bootstrap";
import UserSession from '../UserSession';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            search: '',
            ad: {}
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
        axios.get('http://localhost:4000/ads/')
            .then(res => {
                /*
                this.setState({ ads: res.data });
                const { ads } = this.state;
                 */
                const random = Math.random() * (+res.data.length - +0) + +0;
                const randomAd = res.data[Math.floor(random)];
                this.setState({ad: randomAd});
            });
    };

    adToWishList = (productId, productName, productUrl, productVisible) => {
        const wish = {
            user: UserSession.getName('email'),
            id: productId,
            name: productName,
            imgn: productUrl
        };
        axios.post('http://localhost:4000/user/make-wish',wish)
            .then(res => {
                NotificationManager.success('Listo', 'Agregado a tu wishlist');
            })
            .catch((error) => {
                NotificationManager.warning('Lo sentimos', 'No se pudo hacer el deseo debido a '+error);
            });

    };

    onSearchChange = (e) => {
        this.setState({ search: e.target.value })
    };

    onSearchButton = () => {
        const { search } = this.state;
        axios.get('http://localhost:4000/products/search/' + search)
        .then(res => {
            this.setState({ products: res.data });
        })
        .catch(error => {
            console.log(error);
        });
    };

    redirect = () => {
        this.props.history.push('/login');
    };

    render(){
        const { products, ad } = this.state;
        return (
            <>
                <NotificationContainer/>
                <Navbar searchVisible={false} onChangeMethod={this.onSearchChange} onClickMethod={this.onSearchButton} redirect={this.redirect}></Navbar>
                <div style={{padding: '20px'}} className="container">
                    <div className="row">
                        <div className="col-sm-2" style={{borderBlock: '10', height: '100vh', position:'sticky', top:'20px'}}>
                            <h2 className="my-5">¡No te lo pierdas!</h2>
                            <Card border='info'>
                                <Card.Img src={ad.imageUrl} />
                                <Card.Body>
                                    <Card.Text>
                                    <h4>{ad.title}</h4>
                                    <p>{ad.description}</p>
                                    <p style={{ fontWeight: 'bold' }}>${ad.price}</p>
                                    </Card.Text>
                                    <a href={`mailto:${ad.owner}`}>Obtener mas Información</a>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-9 ml-5">
                            <h1 className="my-5">¡Bienvenido al Bazar!</h1>
                            <h2 className="my-3">Productos que te pueden interesar...</h2>
                            <div className="table-wrapper">
                                <Table style={{color:'white', backgroundColor: '#66A0B7'}} borderless striped hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Categoría</th>
                                            <th>Precio</th>
                                            <th>Imagenes del producto</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => {
                                            return (
                                                product.visibility !== 0 ?
                                                <tr>
                                                    <td>{product.name}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.category}</td>
                                                    <td>${product.price}</td>
                                                    <td>
                                                        <img alt="img" src={product.url1} style={{ maxWidth: '30%' }} />&nbsp;&nbsp;
                                                    <img alt="img" src={product.url2} style={{ maxWidth: '30%' }} />&nbsp;&nbsp;
                                                    <img alt="img" src={product.url3} style={{ maxWidth: '30%' }} />
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => this.redirectTo(product._id)}>Ver este producto</Button>
                                                        <Button onClick={() => this.adToWishList(product._id, product.name, product.url1)} className="btn-warning mt-2"><i className="fas fa-star"/>&nbsp;Agregar a Wishlist</Button>
                                                    </td>
                                                </tr>
                                                    :
                                                    null
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Profile;
