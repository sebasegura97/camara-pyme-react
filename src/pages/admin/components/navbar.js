import React from 'react'
import 'isomorphic-fetch'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import CustomNavLink from '../../app/components/custom-nav-link'
import { Link } from 'react-router-dom'



export default class Menu extends React.Component {
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
            <div className="container-fluid p-0">
                <Navbar color="light " light expand="md">
                    <NavbarBrand >
                        <Link to="/">
                            camara-pyme
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto justify-content-center align-items-center" navbar>
                            <NavItem>
                                <CustomNavLink>
                                    <Link to="/admin/news">
                                            Noticas
                                    </Link>
                                </CustomNavLink>
                            </NavItem>
                            <NavItem>
                                <CustomNavLink>
                                    <Link to="/admin/members" >
                                            Pagos
                                    </Link>
                                </CustomNavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}