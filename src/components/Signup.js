import React from 'react';
import { Link } from "react-router-dom";

class Signup extends React.Component {
    render () {
        return(
            <section className="overflow-hidden"
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/tamaulipas_destinos-principales_tampico_04.jpg)'
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
                                <form>
                                    <div className="py-5">
                                        <h1 className="mb-5 my-5">Ingresa tus datos</h1>
                                        <div className="form-group">
                                            <input type="text" placeholder='Nombre' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder='Apellidos' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder='Email' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Contraseña' style={{width: '70%'}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder='Confirma tu contraseña' style={{width: '70%'}}/>
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
