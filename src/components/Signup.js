import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeHashpassword = this.onChangeHashpassword.bind(this);
        this.onChangeCpassword = this.onChangeCpassword.bind(this);

        this.state = {
            name: '',
            lastname: '',
            username: '',
            email: '',
            hashpassword: '',
            cpassword:'',
            telephone: ''
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeLastName= (e) =>{
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeUserName= (e) =>{
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail= (e) =>{
        this.setState({
            email: e.target.value
        });
    }

    onChangeHashpassword = (e) =>{
        this.setState({
            hashpassword: e.target.value
        });
    }

    onChangeCpassword = (e) =>{
        this.setState({
            cpassword: e.target.value
        });
    };

    onChangeTelephone = (e) => {
        this.setState({ telephone: e.target.value })
    };

    onSubmit = (e) =>{
        if (this.state.hashpassword !== this.state.cpassword){
            alert('Passwords dont match')
        } else {

        e.preventDefault();
        const user = {
            name: this.state.name,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            hashpassword: this.state.hashpassword,
            telephone: this.state.telephone
        };

        console.log(user);

        axios.post('http://localhost:4000/user/create-user', user)
        .then(res => {
            this.props.history.push({
                pathname: '/login',
                state: { email: this.state.email,
                    }
                })
            })
        .catch(() => {
            alert('El email o password son incorrectos')
        });
    }
    }

    render () {
        return(
            <section className="overflow-hidden"
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://res.cloudinary.com/dvg0v2vjr/image/upload/v1590736842/tampico_ejqx30.jpg)'
                }}>
                <div className="">
                    <div className="row">
                        <div className="col-sm-6 text-center px-5" style={{color: 'white', fontWeight: 'bold', fontSize: 45}}>
                            <div>
                                <p style={{ marginTop: '100%' }}>¿Listo para comenzar a comprar?</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-center"
                                 style={{
                                     backgroundColor: 'white',
                                     width: '80%',
                                     height: '100vh',
                                     marginLeft: '20%'
                                 }}>
                                <form onSubmit={this.onSubmit}>
                                    <div className="py-5">
                                        <h1 className="mb-5 my-5">Ingresa tus datos</h1>
                                        <div className="form-group">
                                            <input required value = {this.state.username} onChange = {this.onChangeUserName.bind(this)} type="text" placeholder='Username' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.name} onChange = {this.onChangeName.bind(this)} type="text" placeholder='Nombre' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.lastname} onChange = {this.onChangeLastName.bind(this)} type="text" placeholder='Apellidos' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.email} onChange = {this.onChangeEmail.bind(this)} type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.hashpassword} onChange = {this.onChangeHashpassword.bind(this)} type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.cpassword} onChange = {this.onChangeCpassword.bind(this)} type="password" placeholder='Confirmar Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input required value = {this.state.telephone} onChange = {this.onChangeTelephone.bind(this)} type="numbers" placeholder='Teléfono celular' minLength="10" maxLength="10" style={{width: '70%'}}/>
                                        </div>

                                        <button type="submit" className="btn mt-5"
                                                style={{width: '40%', backgroundColor: '#80ffcc', color: 'white', fontSize: 20}}>
                                            <b>Registrate</b>
                                        </button>
                                    </div>
                                </form>
                                <div style={{fontSize: 20, fontWeight: 'bold'}}>
                                    <p>¿Ya eres usuario?</p>
                                    <Link to="/" style={{color: '#80ffcc', textAlign: 'center'}}>Inicia Sesión</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Signup;
