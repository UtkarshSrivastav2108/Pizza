import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <>
            <footer className="page-footer font-small shadow-lg unique-color-dark" >

                <div style={{ backgroundColor: "red", textAlign: "left" }}>
                    <div className="container">


                        <div className="row py-4 d-flex align-items-center">


                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0" >
                                <h6 style={{ color: "white", fontWeight: "700", textAlign: "left" }} className="mb-0 px-">Get connected with us on social networks!</h6>
                            </div>



                            <div className="col-md-6 col-lg-7 text-center text-md-right"  >


                                <a className="fb-ic fifi">
                                    <i style={{ padding: "0 20px", cursor: "pointer" }} className="fab fa-facebook-f white-text mr-4"> </i>
                                </a>

                                <a className="tw-ic fifi">
                                    <i style={{ padding: "0 20px", cursor: "pointer" }} className="fab fa-twitter white-text mr-4"> </i>
                                </a>

                                <a className="gplus-ic fifi">
                                    <i style={{ padding: "0 20px", cursor: "pointer" }} className="fab fa-google-plus-g white-text mr-4"> </i>
                                </a>

                                <a className="li-ic fifi">
                                    <i style={{ padding: "0 20px", cursor: "pointer" }} className="fab fa-linkedin-in white-text mr-4"> </i>
                                </a>

                                <a className="ins-ic fifi">
                                    <i style={{ padding: "0 20px", cursor: "pointer" }} className="fab fa-instagram white-text"> </i>
                                </a>

                            </div>

                        </div>


                    </div>
                </div>


                <div className="container text-center text-md-left mt-5" >


                    <div className="row mt-3" style={{ textAlign: "left" }}>


                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold"><img src="./images/footerLogo.png" style={{ height: "90px" }} /></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit.</p>

                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <a href="#!">Veg Pizza</a>
                            </p>
                            <p>
                                <a href="#!">Non Veg Pizza</a>
                            </p>
                            <p>
                                <a href="#!">Burger Pizza</a>
                            </p>
                            <p>
                                <a href="#!">Pasta Pizza</a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>

                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fas fa-home mr-3"></i>  &nbsp; Faridabad, HR 121001, IN</p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> &nbsp; info@ghostpepper.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> &nbsp;  + 91 9873029249</p>
                            <p>
                                <i className="fas fa-print mr-3"></i>  &nbsp; + 91 9873029249</p>

                        </div>


                    </div>


                </div>


                <div className="footer-copyright text-center py-4 mt-2">© 2021 Copyright :
                    <a href="https://ghostpepper.com/"> Ghostpepper.com</a>
                </div>


            </footer>


        </>
    )
}

export default Footer
