import React from "react";
import { Card, NavLink } from "react-bootstrap";
import acrdImg from '../images/accordian.PNG';
import pageNation from '../images/pagenation.PNG';
import SignUp from '../images/signup.PNG';
import eCART from '../images/ecart.PNG';
import Portfolio from '../images/port-folio.PNG';

const Works = () => {

    return (
        <>
            <div className="container  p-5 mt-5">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={SignUp} alt="signup"
                            />
                            <Card.Body>
                                <Card.Title>React Signup form</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript, Tailwind, html5.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/react-form-validation"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://react-signup-form-validation.netlify.app"
                                    target="_blank"
                                    className="btn-sm btn-primary btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary">Demo
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={eCART} alt="eCart" />
                            <Card.Body>
                                <Card.Title>React eCart</Card.Title>
                                <Card.Text>
                                    <code> React, Redux, JavaScript, bootstrap, html5.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/react-e-cart"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://my-react-ecart.netlify.app" target="_blank"
                                    className="btn-sm btn-primary btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary">Demo
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={acrdImg} alt="signup" />
                            <Card.Body>
                                <Card.Title>React Accordian</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript, bootstrap, html5.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/react-my-accordian"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://react-my-accordian.netlify.app" target="_blank"
                                    className="btn-sm btn-primary btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary">Demo
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={pageNation} alt="pagenation" />
                            <Card.Body>
                                <Card.Title>React Pagination</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript, JSON API, Semantic UI, html5.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/React-Pagenation"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://react-pagenation.netlify.app" target="_blank"
                                    className="btn-sm btn-primary btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary">Demo
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={Portfolio} alt="portfolio" />
                            <Card.Body>
                                <Card.Title>React Portfolio</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript, bootstrap, html5.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/my-React-PortFolio"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://amarnath-react-portfolio.netlify.app/" target="_self"
                                    className="btn-sm btn-primary btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary">Demo
                                </NavLink>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works;