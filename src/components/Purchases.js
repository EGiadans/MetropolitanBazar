import React from "react";
import Navbar from "./NavBar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/')
            .then(res => {
                this.setState({
                    sales: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        const { sales } = this.state;
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="my-5 py-3">
                        <h1>Purchases</h1>
                        <div className="table-wrapper">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Fecha de la publicación</th>
                                    <th>Cantidad</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sales.map((sale) => {
                                    return (
                                        <tr>
                                            <td>{sale.name}</td>
                                            <td>
                                                <img
                                                    src={sale.url1}
                                                    style={{
                                                        maxWidth: '10%'
                                                    }}/>
                                            </td>
                                            <td>{sale.date}</td>
                                            <td>${sale.price}</td>
                                        </tr>
                                    );
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Sales;
