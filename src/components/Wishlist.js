import React from "react";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";


const Wishlist = (props) => (
    <div className="container bg-light">
        <div>
            <h1 style={{color:'#2C85A8'}}>Estos son tus deseos</h1>
            <Table>
                <thead> 
                    <tr>
                        <th>#</th>
                        <th>Deseo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                    {props.wishes.map((wish, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{wish.name}</td>
                        <td align='center'> 
                        <img alt="img" src={wish.imgn} style={{ maxWidth: '20%' }} />
                        </td>
                        <td>
                        <Button style={{ marginLeft: "auto", float: "right" }} variant="info" onClick={() => props.goToWish(wish.refId)}>Ver Deseo</Button>
                        </td>
                        
                    </tr>
                    ))}
            </Table>
        </div>
    </div>
);
export default Wishlist;