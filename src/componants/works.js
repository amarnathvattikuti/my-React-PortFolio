import React from "react";
import { Card, NavLink } from "react-bootstrap";
import acrdImg from '../images/accordian.PNG';
import pageNation from '../images/pagenation.PNG';
import SignUp from '../images/signup.PNG';
import eCART from '../images/ecart.PNG';
import Portfolio from '../images/port-folio.PNG';
import crud from '../images/crud.PNG';
import userauth from '../images/user-auth.png';
import muiDashboard from '../images/mui-dashboard.PNG';
import muiGame from '../images/mui-game.PNG';

const Works = () => {

    return (
        <>
            <div className="container  p-2 mt-5">
                <h2 className="TitleReact" id="react">React Works</h2>
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
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={muiDashboard} alt="pagenation" />
                            <Card.Body>
                                <Card.Title>React Material UI - Dashboard</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript, Material UI, Tailwind.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/Dashboard-mui"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://dashboard-mui.netlify.app/" target="_blank"
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
                            <Card.Img variant="top" src={muiGame} alt="pagenation" />
                            <Card.Body>
                                <Card.Title>React MUI-Game Flow</Card.Title>
                                <Card.Text>
                                    <code> React, JavaScript,Material UI.</code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/mui-game"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://mui-game.netlify.app/" target="_blank"
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
                <h2 className="TitleFullStack" id="fullstack">FullStack Works</h2>
                <div className="row mb-5">
                    
                    <div className="col-12 col-lg-6 d-flex justify-content-center mb-5">
                        <Card
                            className="shadow-sm p-4 boxCont"
                        >
                            <Card.Img variant="top" src={crud} alt="signup"
                            />
                            <Card.Body>
                                <Card.Title>FullStack CRUD Operation</Card.Title>
                                <Card.Text>
                                    <code> Mongo | Express | React | Node </code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/fullstack-crud"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://fullstack-mern-crud-operation.netlify.app/"
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
                            <Card.Img variant="top" src={userauth} alt="signup"
                            />
                            <Card.Body>
                                <Card.Title>FullStack User Authentication</Card.Title>
                                <Card.Text>
                                    <code> Mongo | Express | React | Node </code>
                                </Card.Text>
                                <NavLink href="https://github.com/amarnathvattikuti/user-auth-mern"
                                    target="_blank"
                                    className="btn-sm btn-primary mr-2 btns"
                                    style={{ width: 100, display: "inline-block" }}
                                    variant="primary mr-2">Code
                                </NavLink>
                                <NavLink href="https://user-authentication-mern.netlify.app/"
                                    target="_blank"
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