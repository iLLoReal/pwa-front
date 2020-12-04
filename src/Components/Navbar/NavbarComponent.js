import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Kanban from "../../Pages/Kanban";
import Login from "../../Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTicket from "../Kanban/AddTicket";
import SignUp from "../../Pages/SignUp";

function NavbarComponent() {
  console.log(window.location.href.search("/login"));
  if (
    !window.localStorage.getItem("id") &&
    window.location.href.search("/login") === -1
  ) {
    window.location.href = "/login";
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#kanban">Kanban</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/kanban">Kanban</Nav.Link>
                  <Nav.Link href="/create">AddTicket</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/create" component={AddTicket} />
              <Route path="/kanban" component={Kanban} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
