import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import {Navbar, Nav, Carousel, Container, Image, Jumbotron, Button, Card} from 'react-bootstrap'
import Criador from './pages/Criador';
import Novo from './pages/Novo';
import Post from './pages/Post';
function App() {
return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        Baskout
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="/criador">O criador</Nav.Link>
        <Nav.Link href="/contato">Contato</Nav.Link>
      </Nav>
      <Nav className="mr">
        <Nav.Link href="/novo-post">Novo Post</Nav.Link>
      </Nav>
    </Navbar>
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contato' exact component={Contato}/>
        <Route path='/criador' exact component={Criador}/>
        <Route path='/novo-post' exact component={Novo}/>
        <Route path='/post/:id' exact component={Post}/>
    </Switch>
    </BrowserRouter>
    <Navbar bg="dark" variant="dark" style={{bottom:0, position:'fixed', width:'100%'}}> 
    <Navbar.Brand href="/">Baskout</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="/criador">O criador</Nav.Link>
        <Nav.Link href="/contato">Contato</Nav.Link>
    </Nav>
    <h6 style={{color:"#ffffff"}}>Feito por Alexandre Darío Martín</h6>
    </Navbar>
    </>
)
}
export default App;