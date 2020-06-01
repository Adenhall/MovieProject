import React from 'react'
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap/'

export default function NavBar(props) {
    let keyword = '';
    const searchByKeyword = (e) => {
        e.preventDefault()
        props.searchTheKeywordProps(keyword)
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="https://movieeeee.netlify.app/">MOVIE 'N CHILL</Navbar.Brand>
                <Nav className="mr-auto">
                    
                </Nav>
                <Form inline onSubmit={(e) => searchByKeyword(e)}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => keyword = e.target.value} />
                    <Button variant="outline-info" type="submit">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
