import React from 'react';

class Login extends React.Component {
    render () {
        return(
            <section
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url('+'https://dam.muyinteresante.com.mx/wp-content/uploads/2020/02/Tampico.png'+')'
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
                                     height: '60vh'
                                 }}>
                                <form>
                                    <div className="py-5">
                                        <h1 className="mb-5">Iniciar Sesión</h1>
                                        <div className="form-group">
                                            <input type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-5" style={{width: '45%'}}>Iniciar</button>
                                    </div>
                                </form>
                                <h6>¿Aún no tienes cuenta?</h6><a href="https://www.wikipedia.org">Registrate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;
