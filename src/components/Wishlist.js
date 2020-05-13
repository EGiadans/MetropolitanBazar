import React from "react";
import Button from "react-bootstrap/Button";

const Wishlist = (wishes,onWishChange, onWishSubmit) => (
    <div className="container bg-light">
        <div className="row">
            <div className="col-sm-12">
                <h1 className="my-5">Haz un deseo</h1>
                <div className="row my-5 mx-5">
                    <h5>&nbsp;Nombre del articulo:</h5>&nbsp;<input name={'wish'} onChange={() => onWishChange} type="text"/> <Button onClick={() => onWishSubmit}>Enviar</Button>
                </div>
            </div>
        </div>
        <div>
            <h1>Estos son tus deseos</h1>
            <div>
                <ul>
                    {console.log(wishes)}
                </ul>
            </div>
        </div>
    </div>
);
export default Wishlist;