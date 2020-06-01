import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const MyInfo = ({name, lastname, email, password}) => (
    <div className="container bg-light">
        <div className="row">
            <div className="col-sm-3">
                <div className="my-5 mx-5">
                    <img alt="profile" src="https://www.mediavisioninteractive.com/wp-content/uploads/2016/10/louis-profile-rounded-1.png"/>
                </div>
                <div className="align-content-center my-5 text-center">
                    <Button variant="info">Cambiar imagen</Button>
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
                </Form>
            </div>
        </div>
    </div>
);
export default MyInfo;
