import React from 'react'
import {NavbarBrand} from 'reactstrap';

const NavbarButton = (props) => {
    return <NavbarBrand 
    onClick={() => {window.location.href=props.endpoint}} 
    className="navButton"
    >
        {props.name}
    </NavbarBrand>
}

export default NavbarButton;