import React from "react";
import Button from "react-bootstrap/Button";

function someFn(file){
    var acta = file
}
const MyDocs = ({ acta }) => (
    <div className="container bg-light">
        <div className="row">
            <div className="col-sm-12">
                <h1 className="my-5">Carga de documentos oficiales <i className="fas fa-file-signature" /></h1>
                <h4>Esta sección te permite proporcionar tus documentos oficiales para demostrar tu confiabilidad a otros
                usuarios de la plataforma.</h4>
                <h5 className="my-5">Tranquilo, nadie más los podrá ver además de ti.</h5>
                <div className="row my-5 mx-5">
                    <h5><i className="fas fa-check" style={{color: 'green'}}/>&nbsp;Acta de nacimiento </h5>&nbsp;<input type="file" value={acta} onSubmit={someFn(acta)}/> <Button>Enviar</Button>
                </div>
                <div className="row my-5 mx-5">
                    <h5><i className="fas fa-times" style={{color: 'red'}}/>&nbsp;Credencial de elector </h5>&nbsp;<input type="file" /> <Button>Enviar</Button>
                </div>
            </div>
        </div>
    </div>
);
export default MyDocs;
