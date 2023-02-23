import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link" onClick={() => {window.location.href="/person"}}>Persons</Button>
                </Container>
            </div>
        );
    }
}
export default Home;