import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
import axios from "axios";

class MyAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
            date: '',
            file1: '',
            imgUrl: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, description, price } = this.state;
        const date = moment().format();
        const product = {
            title,
            description,
            price,
            date
        };
        axios.post('http://localhost:4000/ads/create-ad', product)
            .then(() => {
                this.setState({ name: '', description: '', category: '', price: '' });
                this.props.history.push("/feed");
            });
    };

    onInputChange = (e) => {
        const { id, value } = e.target;
        const change = { [id]: value };
        this.setState(change);
    };

    render() {
        return(
            <>
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="my-5"><i className="fas fa-ad" /> Crea aqui tu anuncio</h1>
                            <h4 className="pb-3">Esta sección te permite crear anuncios clasificados para promocionar un producto que quieras poner
                                a la venta </h4>
                            <form>
                                <label><b> Nombre del producto: </b></label><input id="title" name="" type="text" placeholder="" onChange={this.onInputChange} /><br/>
                                <label><b> Descripción: </b></label><input id="description" name="" type="text" placeholder="" onChange={this.onInputChange} /><br/>
                                <label><b> Precio de venta: </b></label><input id="price" name="" type="text" placeholder="" onChange={this.onInputChange} /><br/>
                                <label><b> Imagen del producto: </b></label><input id="image" name="" type="file" placeholder="" onChange={this.onInputChange} /><br/>
                                <Button className="btn-primary" onClick={this.onSubmit}>Cambiar</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MyAds;

