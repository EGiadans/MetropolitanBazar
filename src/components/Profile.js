import React from "react";
import Navbar from "./NavBar";
import {Tab, Tabs } from "react-bootstrap";
import MyInfo from "./MyInfo";
import axios from 'axios';
import MyDocs from "./MyDocs";
import MyAds from "./MyAds";
import Button from "react-bootstrap/Button";
import Wishlist from "./Wishlist";
import UserSession from '../UserSession';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                lastname: '',
                email: '',
                password: '',
                acta: null,
                nwish: '',
                wishes: {
                    name: 'prueba'
                },
                wishesLoaded: false
        };
        this.onActaSubmit = this.onActaSubmit.bind(this);
        this.onActaChange = this.onActaChange.bind(this);
        this.onWishSubmit = this.onActaSubmit.bind(this);
        this.onWishChange = this.onActaChange.bind(this);

    }

    onActaChange(e){
        this.setState({
            acta: e.target.files
        })
    }

    onWishChange(e){
        this.setState({
            nwish: e.target.value
        })
    }

    goToWish = (productId) => {
        this.props.history.push({
            pathname: `/product/${productId}`,
            state: {
                from: '/feed'
            }
        })
    };

    onWishSubmit(e){
        const user = {
            wish: this.state.nwish,
            user: this.state.email
        }
        axios.post("http://localhost:4000/user/make-wish",user)
        .then((response) => {
            console.log('user made a new wish')
        }).catch((error) => {
            console.log(error)
        });
    }

    onActaSubmit(e){
        e.preventDefault()
        console.log('intento de subida')
        var formData = new FormData();
        formData.append('acta',this.state.acta);
        formData.append('user', this.state.email);
        console.log(this.state.acta)
        console.log(formData)
        axios.post("http://localhost:4000/user/acta",formData)
            .then((response) => {
                alert("The file was successfully uploaded");
            }).catch((error) => {
        });
    }

    componentDidMount() {
        //console.log(UserSession.getName('email'));
        //const hemail = this.props.location.state.email
        const hemail = UserSession.getName('email');
        axios.get('http://localhost:4000/user/profile', {
            params: {
                email: hemail
            }
        })
            .then(response => {
                this.setState({
                    name: response.data[0].name,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    password: response.data[0].hashpassword,
                    wishes: response.data[0].wishes,
                    wishesLoaded: true
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    redirect = () => {
        this.props.history.push('/login');
    };

    render() {
        return (
            <>
            <Navbar redirect={this.redirect}></Navbar>
            <div className="container">
                <div className="my-5 py-3">
                    <Tabs style={{fontSize: 20}}>
                        <Tab eventKey="info" title="Mi Información">
                            <MyInfo name={this.state.name} lastname={this.state.lastname} email={this.state.email} password={this.state.password}/>
                        </Tab>
                        <Tab eventKey="docs" title="Mis Documentos">
                            {/*
                            //Check why MyDocs Component is missing from here

                            <div className="container bg-light">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="my-5">Carga de documentos oficiales <i className="fas fa-file-signature" /></h1>
                                        <h4>Esta sección te permite proporcionar tus documentos oficiales para demostrar tu confiabilidad a otros
                                        usuarios de la plataforma.</h4>
                                        <h5 className="my-5">Tranquilo, nadie más los podrá ver además de ti.</h5>
                                        <form onSubmit ={this.onActaSubmit}>
                                            <div className="row my-5 mx-5">
                                                <h5>&nbsp;Acta de nacimiento </h5>&nbsp;<input name='myActa' onChange={this.onActaChange} type="file"/> <Button type = 'submit'>Enviar</Button>
                                            </div>
                                        </form>
                                        <div className="row my-5 mx-5">
                                            <h5><i className="fas fa-times" style={{color: 'red'}}/>&nbsp;Credencial de elector </h5>&nbsp;<input type="file" /> <Button>Enviar</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */}
                        </Tab>
                        <Tab eventKey="ads" title="Mis Anuncios">
                            <MyAds history={this.props.history}/>
                        </Tab>
                        <Tab eventKey="wish" title="Mi Wishlist">
                            {this.state.wishesLoaded && <Wishlist wishes={this.state.wishes} goToWish={this.goToWish}/>}
                        </Tab>
                    </Tabs>
                </div>
            </div>
            </>
        );
    }
}
export default Profile;
