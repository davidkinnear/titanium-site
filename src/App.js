import React from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Items from './Items';
import Contact from './Contact';
import Info from './Info';
import About from './About';
import Footer from './Footer';
import Top from './Top';
import Product from './Product';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Top/>
        <Header/>
        
        <Switch>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/">
          <Banner/>
          <Items/>
          <Contact/>
          <Info/>
          </Route>
        </Switch>
        
        <About/>
        <Footer/>
      </ Router>
    </div>
  );
}

export default App;
