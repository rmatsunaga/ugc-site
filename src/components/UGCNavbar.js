import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../App.css';
import Logo from '../ugc_logo.png';

class UGCNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className = "navBar" color="light" light expand="md">
          <NavbarBrand href='/'>
            <img src={Logo} alt="" className="logo"/> 
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    About
                </DropdownToggle>
                <DropdownMenu right>
                  <LinkContainer to="/about">
                    <DropdownItem>
                      Overview
                    </DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/#">
                    <DropdownItem>
                      Executive Board
                    </DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/#">
                    <DropdownItem>
                      Achievements
                    </DropdownItem>
                  </LinkContainer>
                  <LinkContainer to="/#">
                    <DropdownItem>
                      Documents
                    </DropdownItem>
                  </LinkContainer>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href = '/organizations'>Organizations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/blog'>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/calendar'>Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = '/#'>Contact</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  export default UGCNavbar;