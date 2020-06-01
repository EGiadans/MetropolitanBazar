import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';
import UserSession from '../UserSession';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);


        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    goToProfile = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        UserSession.setName('email', this.state.email);
        axios.post('http://localhost:4000/user/login-user', user)
        .then( res => {
            this.props.history.push({
                pathname: '/feed',
                state: { email: this.state.email,
                    }
                })
            })
        .catch(() => {
            alert('El email o password son incorrectos')
        });
    };
    render () {
        return(
            <>
            <section
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://res.cloudinary.com/dvg0v2vjr/image/upload/v1590736842/tampico_ejqx30.jpg)'
                }}>
                <NavBar searchVisible={true}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="mx-auto"
                                 style={{
                                     marginTop: '10%',
                                     backgroundColor: 'white',
                                     borderRadius: 10,
                                     width: '35%',
                                     height: '60vh',
                                     textAlign: 'center'
                                 }}>
                                <form onSubmit={this.goToProfile}>
                                    <div className="py-5">
                                        <h1 className="mb-5">Iniciar Sesión</h1>
                                        <div className="form-group">
                                            <input required value = {this.state.email} onChange = {this.onChangeEmail.bind(this)} type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.password} onChange = {this.onChangePassword.bind(this)} type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <button  type="submit" className="btn mt-5" style={{width: '45%', backgroundColor: '#2C85A8', color: 'white'}}>
                                        Iniciar Sesion
                                        </button>
                                    </div>
                                </form>
                                <h6 className="text-center">¿Aún no tienes cuenta?</h6>
                                <Link to="/signup" style={{color: '#2C85A8', fontWeight: 'bold', fontSize: 20}}>Registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default Login;
