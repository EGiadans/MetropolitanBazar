import React from "react";
import Navbar from "./NavBar";
import {Tab, Tabs } from "react-bootstrap";
import MyInfo from "./MyInfo";
import axios from 'axios';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                email: '',
                password: ''
        };
    }


    componentDidMount() {
        axios.get('http://localhost:4000/user/profile')
            .then(response => {
                this.setState({ 
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <>
            <Navbar></Navbar>
            <div className="container">
                <div className="my-5 py-3">
                    <Tabs defaultActiveKey="info" style={{fontSize: 20}}>
                        <Tab eventKey="info" title="Mi Información">
                            <MyInfo name={this.state.name} email={this.state.email} password={this.state.password}/>
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
export default Profile;
