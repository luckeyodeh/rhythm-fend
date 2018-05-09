import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../styles/mobileMenu.css";

export default class MobileMenu extends Component {
  render() {
    return (
      <div className="header__top">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <img alt="soundit logo" className="collapse-sa-logo" src="/images/logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/donate">
                Donate
              </NavItem>
              <NavItem eventKey={1} href="/#about">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
              <NavItem eventKey={3} href="/#partners">
                Partners
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
