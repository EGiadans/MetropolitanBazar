import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios';

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

    onChangeEmail= (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        });
    }

    goToProfile = (e) =>{
        
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:4000/user/login-user', user)
        .then( res => {
            this.props.history.push({
                pathname: '/profile',
                state: { email: this.state.email,
                        password: this.state.password }
                })
            })
        .catch(() => {
            alert('El email o password son incorrectos')
        });
    }
    render () {
        return(
            <>
            <section
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/tamaulipas_destinos-principales_tampico_04.jpg)'
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
                                        <button  type="submit" className="btn mt-5" style={{width: '45%', backgroundColor: '#80ffcc', color: 'white'}}>
                                        </button>
                                    </div>
                                </form>
                                <h6 className="text-center">¿Aún no tienes cuenta?</h6>
                                <Link to="/signup" style={{color: '#80ffcc', fontWeight: 'bold', fontSize: 20}}>Registrate</Link>
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
