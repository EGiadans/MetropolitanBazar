import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import UserProfile from "../UserSession";

class MyDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayIne: [],
            arrayActa: []
        }
    }

    onIneChange = (e) => {
        const { arrayIne } = this.state;
        const newImage = e.target.files[0];
        arrayIne.push(newImage);
        this.setState(arrayIne);
    };

    onActaChange = (e) => {
        const { arrayActa } = this.state;
        const newImage = e.target.files[0];
        arrayActa.push(newImage);
        this.setState(arrayActa);
    };


    onIneSubmit = (e) => {
        e.preventDefault();
        console.log("inesubmit");
        const { arrayIne } = this.state;
        const document = e.target.name;
        const formData = new FormData();
        arrayIne.forEach((file, i) => {
            formData.append(i, file);
        });
        axios.post('http://localhost:4000/products/image-upload', formData,
            {headers: { 'Content-Type': 'multipart/form-data' }}
        ).then((res) => {
            const image = res.data[0].url;
            const user = UserProfile.getName('userId');
            axios.put('http://localhost:4000/user/update-user/'+user,
                {
                     ine: image
                })
                .then(() => {
                    this.props.history.push("/feed");
                });
        })

    };

    onActaSubmit = (e) => {
        e.preventDefault();
        const { arrayActa } = this.state;
        const formData = new FormData();
        arrayActa.forEach((file, i) => {
            formData.append(i, file);
        });
        axios.post('http://localhost:4000/products/image-upload', formData,
            {headers: { 'Content-Type': 'multipart/form-data' }}
        ).then((res) => {
            const image = res.data[0].url;
            const user = UserProfile.getName('userId');
            axios.put('http://localhost:4000/user/update-user/'+user,
                {
                    acta: image
                })
                .then(() => {
                    this.props.history.push("/feed");
                });
        })

    };

    render() {
        return(
            <>
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="my-5"><i className="fas fa-file-signature" />&nbsp;Carga de documentos oficiales</h1>
                            <h4>Esta sección te permite proporcionar tus documentos oficiales para demostrar tu confiabilidad a otros
                                usuarios de la plataforma.</h4>
                            <h5 className="my-5">Tranquilo, nadie más los podrá ver además de ti.</h5>
                            <div className="row my-5 mx-5">
                                <h5>{this.props.acta !== 'null' ? <i className="fas fa-check" style={{color: 'green'}}/>
                                    : <i className="fas fa-times" style={{color: 'red'}}/>}
                                    &nbsp;Acta de nacimiento
                                </h5>&nbsp;
                                <input name={'acta'} onChange={this.onActaChange} type="file"/>
                                <Button onClick={this.onActaSubmit}>Cambiar</Button>
                            </div>
                            <div className="row my-5 mx-5">
                                <img src={this.props.acta} style={{maxWidth: 200}}/>
                            </div>
                            <div className="row my-5 mx-5">
                                <h5>{this.props.ine !== 'null' ? <i className="fas fa-check" style={{color: 'green'}}/>
                                    : <i className="fas fa-times" style={{color: 'red'}}/>}
                                    &nbsp;Credencial de elector
                                </h5>&nbsp;
                                <input type="file" onChange={this.onIneChange}/>
                                <Button onClick={this.onIneSubmit}>Cambiar</Button>
                            </div>
                            <div className="row my-5 mx-5">
                                <img src={this.props.ine} style={{maxWidth: 200}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default MyDocs;
