import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import{Navbar,Nav} from 'react-bootstrap'
export class Navigation extends Component{
    render(){
        return(
            <Navbar bf="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav>
                   <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/client">
                    Clients
                </NavLink>
                </Nav> 
                </Navbar.Collapse>
                
            </Navbar>
            
        )
    }
}