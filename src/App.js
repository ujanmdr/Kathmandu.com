import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home"
import Culture from "../src/Culture/Culture"
import Navbar from "./Navbar/Navbar"
import Footer from "../src/Footer/Footer"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar></Navbar>
       <Route path="/" exact component={Home}></Route>
       <Route path="/culture" exact component={Culture}></Route>
       <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
