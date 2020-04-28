import React from "react";
import Button from "react-bootstrap/Button";

const MyInfo = ({name, email, password}) => (
    <div className="container bg-light">
        <div className="row">
            <div className="col-sm-3">
                <div className="my-5 mx-5">
                    <img alt="profile" src="https://www.mediavisioninteractive.com/wp-content/uploads/2016/10/louis-profile-rounded-1.png"/>
                </div>
                <div className="align-content-center my-5 text-center">
                    <Button>Cambiar imagen</Button>
                </div>
            </div>
            <div className="col-sm-9">
                <form className="mx-5 my-5">
                    <label>Nombre</label>
                    <input readOnly placeholder={name} style={{width: '90%'}} value={name}/>

                    <label>Correo electrónico </label>
                    <input readOnly placeholder={email} style={{width: '80%'}} value={email}/>

                    <label>Contraseña </label>
                    <input readOnly type='password' placeholder={password} value={password} style={{width: '60%'}}/>
                    <Button className="btn-primary">Cambiar</Button>
                </form>
            </div>
        </div>
    </div>
);
export default MyInfo;
