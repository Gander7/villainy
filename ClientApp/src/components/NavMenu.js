import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default props => (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
          <NavItem >
            <NavLink tag={Link} to='/'>Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to='/FellowVillains'>Villains</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to='/profile'>Me</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to='/signin'>Sign In</NavLink>
          </NavItem>
      </Nav>
    </Navbar>   
);