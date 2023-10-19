
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/read';
import Create from './components/create';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="Create">Create</Nav.Link>
              <Nav.Link href="Read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Everything between here is going to change */}
        <Routes>
          {/* Route for the homepage*/}
          <Route path='/' element={<Content></Content>}></Route>
          {/* Route for the "Read" page */}
          <Route path='/read' element={<Read></Read>}></Route>
          {/* Rout for the "Create" page */}
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
