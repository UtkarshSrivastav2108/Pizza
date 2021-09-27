import React, { useState } from 'react'
import "./Pizza.css"
import { Modal } from 'react-bootstrap'


export default function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div style={{ textAlign: "center" }} className="shadow-lg py-4 px-3 mb-5  main rounded">

            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>

                <img src={pizza.image} alt="pizzas" className="img-fluid" style={{ width: "250px", height: "250px", margin: "20px 0 " }} />

            </div>

            <div className="flex-container m-2">
                <div className="w-100 m-1">
                    <p>Varients :</p>
                    <select className="form-control " value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}> {varient} </option>
                        })}
                    </select>
                </div>


                <div className="w-100 m-1">
                    <p >Quantity :</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1} > {i + 1}   </option>
                        })}
                    </select>


                </div>


            </div >

            <div className="flex-container" >

                <div className="m-1 w-100">
                    <h1 style={{ marginTop: "10px" }}>Price: &#8377; /- {pizza.prices[0][varient] * quantity} </h1>

                </div>
                <div className="m-1 mx-2 w-100">
                    <button className="btn">Add to Cart</button>
                </div>


            </div>


            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} alt="sbk" style={{ width: "100%", height: "100%", alignItems: "center", margin: " auto" }} />
                    <br /> <br /> <br /> <br />

                    {pizza.description}
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>


        </div >
    )
}
