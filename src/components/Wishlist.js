import React from "react";

const Wishlist = (props) => (
    <div className="container bg-light">
        <div>
            <h1>Estos son tus deseos</h1>
            <div>
                <ul>
                    {props.wishes.map((wish) => (<li>{wish.name}</li>))}
                </ul>
            </div>
        </div>
    </div>
);
export default Wishlist;