import React, {Component} from 'react';
import {Navbar} from 'reactstrap';
import NavbarButton from './NavbarButton';
import './Navbar.css';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return <Navbar color="dark" dark expand="md">
            <div style={{ paddingLeft: "15px"}}>
                <NavbarButton name="Home" endpoint="/"></NavbarButton>
                <NavbarButton name="Person List" endpoint="/person"></NavbarButton>
                <NavbarButton name="Also Home" endpoint="/"></NavbarButton>
            </div>
        </Navbar>;
    }
}