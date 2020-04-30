import React from "react";
import Navbar from "./NavBar";
import {Tab, Tabs } from "react-bootstrap";
import MyInfo from "./MyInfo";
import MyDocs from "./MyDocs";

class Profile extends React.Component {
    render() {
        return (
            <>
            <Navbar></Navbar>
            <div className="container">
                <div className="my-5 py-3">
                    <Tabs style={{fontSize: 20}}>
                        <Tab eventKey="info" title="Mi Información">
                            <MyInfo name={"Eduardo Giadáns"}/>
                        </Tab>
                        <Tab eventKey="docs" title="Mis Documentos">
                            <MyDocs />
                        </Tab>
                        <Tab eventKey="payments" title="Mis Pagos">
                            <h1>Payments</h1>
                        </Tab>
                        <Tab eventKey="wish" title="Mi Wishlist">
                            <h1>Wishlist</h1>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            </>
        );
    }
}
export default Profile;
