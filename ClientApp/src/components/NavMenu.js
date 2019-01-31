import React from 'react';
// import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="collapse navbar-collapse" id="navbarSupport">
      <ul className="navbar-nav mr-auto">
          <LinkContainer to={'/'} exact>
            <NavItem>Home</NavItem>
          </LinkContainer>

          <LinkContainer to={'/FellowVillains'}>
            <NavItem>Villains</NavItem>
          </LinkContainer>

          <LinkContainer to={'/myprofile'}>
            <NavItem>Me</NavItem>
          </LinkContainer>

          <LinkContainer to={'/signin'}>
            <NavItem>Sign In</NavItem>
          </LinkContainer>
      </ul>
    </div>
  </nav>
);