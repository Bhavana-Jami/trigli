
import './App.css';
import Triggers from './components/Triggers.js'
import Glimmers from './components/Glimmers.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Container, Form, Button, Row, Col, InputGroup, Card } from "react-bootstrap";
import About from './components/About.js'
import Footer from './components/Footer.js'

import Home from './components/Home.js'
import Profile from './components/Profile.js'


function App() {
  return (
    // <div className="App">
    //   <Navigation/>
    //  <Triggers/>
    //  {/* <Glimmers/> */}
    // </div>
    <Container id="app" className="vh-100 d-flex justify-content-between flex-column">
     

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/triggers" element={<Triggers />} />
        <Route path="/glimmers" element={<Glimmers />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer className="mt-auto"/>
    </BrowserRouter>
  </Container>
  );
}

export default App;
