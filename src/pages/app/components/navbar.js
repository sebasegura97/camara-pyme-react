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
import CustomNavLink from './custom-nav-link'
import { Colors } from '../../../constants/Colors';
import logo from '../../../static/logo.svg'
import { Link } from 'react-router-dom'



export default class Menu extends React.Component{
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
    render(){
        return(
            <div className="container-fluid p-0 navBar">
                <Navbar  light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} className="customLogo"></img>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto justify-content-center align-items-center" navbar>
                            <NavItem className="ml-2">
                                <CustomNavLink>
                                    <Link to="/app/">
                                        <p className="menuItemText">
                                            Inicio
                                        </p>
                                    </Link>
                                </CustomNavLink>
                            </NavItem>
                            <NavItem className="ml-2">
                                <CustomNavLink>
                                    <Link to="/app/membership" >
                                        <p className="menuItemText">
                                            Hazte miembro
                                        </p>
                                    </Link>
                                </CustomNavLink>
                            </NavItem>
                            <NavItem className="ml-2">
                                <CustomNavLink>
                                    <Link to="/app/news" >
                                        <p className="menuItemText">
                                            Noticias
                                        </p>
                                    </Link>
                                </CustomNavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <style jsx>{`
                    .navBar{
                    background-color: white;
                    -webkit-box-shadow: -2px 2px 5px 0px rgba(186,186,186,1);
                    -moz-box-shadow: -2px 2px 5px 0px rgba(186,186,186,1);
                    box-shadow: -2px 2px 5px 0px rgba(186,186,186,1);
                    }
                    .customLogo{
                        height: 5rem;
                    }
                    .menuItemText{
                        color: ${Colors.primaryColor};
                        text-transform: uppercase;
                    }
                    `}</style>
            </div>
        )
    }
}