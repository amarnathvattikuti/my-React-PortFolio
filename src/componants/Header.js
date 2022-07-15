import React from "react";
import { Nav, Navbar, Container, NavDropdown, Offcanvas } from "react-bootstrap";
// eslint-disable-next-line
import Logo from '../images/my-office-pic.jpg';
const Header = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} variant="dark" className="mb-3 shadow-sm">
          <Container fluid>
            <Navbar.Brand href="#" className="text-light">
              <h2 className="Title">AMARNATH</h2>
              <span className="small font-weight-light"
                style={{ letterSpacing: "0.1rem" }}
              >
                FullStack Developer</span>
            </Navbar.Brand>
            {/* link item */}
            <Nav className="me-auto my-2 my-lg-0"
            >
         
            <NavDropdown title="Works" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#react">React</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#fullstack">FullStack</NavDropdown.Item>            
            </NavDropdown>
            </Nav>
            <Navbar.Toggle aria-controls={`responsive-navbar-nav-${expand}`} />
            <Navbar.Offcanvas className="bg-dark"
              id={`responsive-navbar-nav-${expand}`}
              aria-labelledby={`responsive-navbar-nav-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="w-100 text-center">
                  <img src={Logo} alt="myPic"
                    className="rounded-circle"
                    style={{ width: 150 }} />
                  <h3 className="font-weight-light text-secondary mt-2">FullStack-MERN-Developer</h3>
                  <p className="text-secondary font-weight-light border-bottom pb-3 mb-3"><strong>About Me</strong></p>
                  <p className="text-secondary font-weight-light"> I have 12 plus years of overall experience in front-end UI developement/design also have 3 plus years experience in in React.</p>
                  <p className="text-secondary font-weight-light"> Currently working with Mahathi Sofware Private Limited as a seneor UI Developer since oct, 2015. During these years i have built multiple responsive and single page web app's for
                    health care domain and earned great knowledge on Angular and React as front-end technologies.</p>
                  <p className="text-secondary font-weight-light">I am a graduate from kakatiya university in 2007, and completed My MBA in information technology from ISBM business school(2019).</p>
                  <p className="text-secondary font-weight-light">Front end Skills: <code>ReactJS, Redux, JavaScript, jquery, Bootstrap, Material UI, Semantic UI, Tailwind, HTML5, CSS</code></p>
                  <p className="text-secondary font-weight-light">Back end Skills: <code>NODE JS, Express JS</code></p>
                  <p className="text-secondary font-weight-light">Database: <code>MongoDB, MySQL</code> </p>
                  <p className="text-secondary font-weight-light">SVN Tools: <code>SVN, GIT, Azure</code></p>
                  <p className="text-secondary font-weight-light">Design: <code>Photoshop, illustrator, adobe XD</code> </p>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  );
}

export default Header;