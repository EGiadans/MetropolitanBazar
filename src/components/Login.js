import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component {
    handleLogin() {
    }
    render () {
        return(
            <section
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/tamaulipas_destinos-principales_tampico_04.jpg)'
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="mx-auto"
                                 style={{
                                     marginTop: '20%',
                                     backgroundColor: 'white',
                                     borderRadius: 10,
                                     width: '35%',
                                     height: '60vh',
                                     textAlign: 'center'
                                 }}>
                                <form onSubmit={this.handleLogin}>
                                    <div className="py-5">
                                        <h1 className="mb-5">Iniciar Sesión</h1>
                                        <div className="form-group">
                                            <input type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <button type="submit" className="btn mt-5" style={{width: '45%', backgroundColor: '#80ffcc', color: 'white'}}>
                                            <Link to="/profile" style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Iniciar</Link>
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
        );
    }
}
export default Login;
