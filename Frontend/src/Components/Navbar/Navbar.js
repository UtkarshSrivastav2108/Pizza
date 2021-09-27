import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../node_modules/bootstrap/dist/js/bootstrap.min"
import { Nav, Navbar, Container, } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Header() {


    return (
        <div>
            <Navbar className="shadow-lg p-1  navbar navbar-dark" style={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} expand="lg"  >
                <Container >

                    <LinkContainer to="/">
                        <Navbar.Brand ><img src="./images/1.png" alt="sbk" /> </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <LinkContainer to="/cart">
                                <Nav className="nav_link"> <FavoriteBorderIcon />   &nbsp;  WISHLIST </Nav>
                            </LinkContainer>



                            <LinkContainer to="/cart">
                                <Nav className="nav_link"> <AddShoppingCartIcon />   &nbsp;  CART </Nav>
                            </LinkContainer>


                            <LinkContainer to="/login">
                                <Nav className="nav_link" > <AccountCircleIcon />  &nbsp; LOGIN </Nav>
                            </LinkContainer>

                        </Nav>


                    </Navbar.Collapse>

                </Container>
            </Navbar>




        </div>
    )
}

export default Header
