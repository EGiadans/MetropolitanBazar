import React from "react";
import Navbar from "./NavBar";
import {Tab, Tabs } from "react-bootstrap";
import MyInfo from "./MyInfo";

class Sales extends React.Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                    <div className="my-5 py-3">
                        <Tabs defaultActiveKey="info" style={{fontSize: 20}}>
                            <Tab eventKey="info" title="VENTAS">
                                <MyInfo name={"Eduardo Giadáns"}/>
                            </Tab>
                            <Tab eventKey="docs" title="Mis Documentos">
                                <h1>Algo2</h1>
                            </Tab>
                            <Tab eventKey="payments" title="Mis Pagos">
                                <h1>Algo3</h1>
                            </Tab>
                            <Tab eventKey="wish" title="Mi Wishlist">
                                <h1>Algo4</h1>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </>
        );
    }
}
export default Sales;
