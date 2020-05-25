import React from "react";
import Button from "react-bootstrap/Button";


const Wishlist = (props) => (
    <div className="container bg-light">
        <div>
            <h1>Estos son tus deseos</h1>
            <div>
                <ul>
                    {props.wishes.map((wish) => (
                    <li>{wish.name}&nbsp;
                    <Button onClick={() => props.goToWish(wish.refId)}>Ver Deseo</Button>
                    </li>
                    
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
export default Wishlist;