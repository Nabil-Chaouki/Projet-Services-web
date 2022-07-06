import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Client } from './Client';
import { Home } from './Home';


export default class NavbarComp extends Component {
  render() {
    return (
        <Router>

        <div>

         <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/client"}>Clients</Nav.Link>

          
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>
        </div>
        <div>
        <Switch>
          <Route path="/client">
             <Client></Client>
          </Route>        
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
