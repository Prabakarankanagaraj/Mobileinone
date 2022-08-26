import { Offcanvas } from "bootstrap"
import { Navbar,Container,Nav } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"

export const Menu=()=>{
    return(
        <>
         <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/view" >Mobile World</Navbar.Brand>
                <Navbar.Toggle aria-aria-controls="click"></Navbar.Toggle>
                <Navbar.Collapse id="click">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#/view">Home</Nav.Link>
                        <Nav.Link href="/#/fresh">New</Nav.Link>
                        <Nav.Link href="/#/open">Read</Nav.Link>
                        <Nav.Link href="/#/modify">Update</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

         </Navbar>
                 
        </>
    )
}