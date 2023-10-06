
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from  './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
    <div className ="App">
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
        <Route path='/' element = {<Content></Content>}></Route>
        <Route path='/read' element = {<Header></Header>}></Route>
        <Route path='/create' element = {<Footer></Footer>}></Route>
      </Routes>

        {/* Calling the functions from another components */}
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
    </div>
    </BrowserRouter>
   );
}

export default App;
