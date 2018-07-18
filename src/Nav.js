import React from 'react'
import { Link } from 'react-static'
import MenuList from 'MenuItems'

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
  DropdownItem,
  Container,
  Row,
  Col } from 'reactstrap';


 export default class Navigation extends React.Component {
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
      <div className="navWrapper">
        <Navbar color="dark" dark fixed="top" expand="md">
            <Container>
                <Row>
                    <Col xs="3">
                        <NavbarBrand href="/"><img src="https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/logo-attorney-template.svg" /></NavbarBrand>
                    </Col>
                    <Col xs="9" className="text-right">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <MenuList />
                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
      </div>
    );
  }
}