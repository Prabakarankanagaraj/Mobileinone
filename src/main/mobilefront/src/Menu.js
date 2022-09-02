import { Offcanvas } from "bootstrap"
import { Navbar,Container,Nav } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import { onsubmitLogout } from "./Connect"

export const Menu=()=>{
    return(
        <>
         <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/view" >Mobile World</Navbar.Brand>
                <Navbar.Toggle aria-aria-controls="click"></Navbar.Toggle>
                <Navbar.Collapse id="click">
                    <Nav className="ms-auto">
                        <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/view">Home</a>
                        <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/fresh">New</a>
                        <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/filter">Filter</a>
                        <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/alter">Alter</a>
                        <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/remove">Remove</a>
                        <button className="btn btn-outline-danger rounded-5 ms-2" onClick={async()=>{
                                await onsubmitLogout()
                                window.location.assign("/")
                            }}>
                                <i class="bi bi-door-closed-fill"></i>
                        </button>
                    </Nav>

                </Navbar.Collapse>

            </Container>

         </Navbar>
                 
        </>
    )
}