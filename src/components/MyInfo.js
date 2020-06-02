import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";


const MyInfo = ({name, lastname, email, password, onClicky, telephone, pimg, onPimgChange}) => (
    <div className="container bg-light">
        <div className="row">
            <div className="col-sm-3">
                <div className="my-5 mx-5">
                    <img style={{ maxWidth: '150px' }} alt="profile" src={pimg}/>
                </div>
                <div className="align-content-center my-5 text-center">
                    <Button onClick ={onClicky}>Cambiar Imagen</Button>
                    <input onChange={onPimgChange} style={{display:'none'}} type="file" id="myimg"/>
                </div>
            </div>
            <div className="col-sm-9">
                <Form className="mx-5 my-5">
                        <Form.Label lg={2}>Nombre</Form.Label>
                        <Form.Control size="lg" plaintext type="text" value={name +' '+ lastname} />
                        <Form.Label lg={2}>Correo Electronico</Form.Label>
                        <Form.Control size="lg" plaintext type="email" value={email} />
                        <Form.Label lg={2}>Contraseña</Form.Label>
                        <Form.Control size="lg" plaintext type="password" value={password} />
                        <Form.Label lg={2}>Teléfono</Form.Label>
                        <Form.Control size="lg" plaintext type="text" value={telephone} />
                </Form>
            </div>
        </div>
    </div>
);
export default MyInfo;
