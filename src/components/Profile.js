import React from "react";
import Navbar from "./NavBar";
import {Tab, Tabs } from "react-bootstrap";
import MyInfo from "./MyInfo";
import axios from 'axios';
import MyDocs from "./MyDocs";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                name: '',
                lastname: '',
                email: '',
                password: ''
        };
    }


    componentDidMount() {
        const hemail = this.props.location.state.email
        console.log(hemail)
        axios.get('http://localhost:4000/user/profile', {
            params: {
                email: hemail
            }
        })
            .then(response => {
                console.log(response)
                this.setState({
                    name: response.data[0].name,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    password: response.data[0].hashpassword
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
                    <Tabs style={{fontSize: 20}}>
                        <Tab eventKey="info" title="Mi Información">
                            <MyInfo name={this.state.name} lastname={this.state.lastname} email={this.state.email} password={this.state.password}/>
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
