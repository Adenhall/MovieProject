import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap/'

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="https://movieeeee.netlify.app/">MOVIE 'N CHILL</Navbar.Brand>
                <Nav className="mr-auto">
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
