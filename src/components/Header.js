import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {


    
    return (
        <div>       
    <navbar class="home" bg="primary home " >
    <Container class="home">
    <Link to="/" class="home1"><Navbar.Brand  >Home</Navbar.Brand></Link>
    
    </Container>


  </navbar>

        </div>
    )
}

export default Header
