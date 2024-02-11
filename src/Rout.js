import React from 'react'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import About from './Component/About';
import Home from './Component/Home';
import Api from './Component/Api';
import List from './List';
import FormValidation from './Component/FormValidation';
import Modal from './Component/Modal';
import { Home2 } from './Memo/Home';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ParentComponent';
import IfElseRendering from './Component/IfElseRendering';
import ListClass from './Component/List/ListClass';
import ListFunction from './Component/List/ListFunction';
import UseState from './Component/Hooks/UseState';
import UseEffect from './Component/Hooks/UseEffect';

function Rout() {
  return (
    <div>
        <Router>
                <Nav className="justify-content-end" activeKey="/home">
                    
                    <Link to="/">Home &nbsp;</Link>                    
                    <Link to="/about">About &nbsp;</Link> 
                    <Link to="/api">Api User &nbsp;</Link>
                    <Link to="/validation">Validation &nbsp;</Link>
                    <Link to="/modal">Modal &nbsp;</Link>
                    <Link to="/memo">Memo &nbsp;</Link>
                    
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                    </Nav.Item>
                    <Link to="/apple"> Apple</Link>
                    <NavDropdown title="Rendering" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link to="/event-bind">Click Action &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/parent">Parent &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="list"> List &nbsp;</Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Condition" id="basic-dropdown">
                        <NavDropdown.Item ><Link to="/if-else">IF Else &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/parent">Parent &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Hooks" >
                        <NavDropdown.Item ><Link to="/use-state">Use State &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/use-effect">Use Effect &nbsp;</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/api" element={<Api />} />
                        <Route path="/validation" element={<FormValidation />} />
                        <Route path="/modal" element={<Modal />} />
                        <Route path="/memo" element={<Home2 />} />
                        <Route path="/event-bind" element={<EventBind />} />
                        <Route path="/parent" element={<ParentComponent />} />
                        <Route path="/if-else" element={<IfElseRendering />} />
                        <Route path="/list-class" element={<ListClass />} />
                        <Route path="/list-function" element={<ListFunction />} />
                        <Route path="/use-state" element={<UseState />} />
                        <Route path="/use-effect" element={<UseEffect />} />
                    </Routes>
                </Router>
    </div>
  )
}

export default Rout