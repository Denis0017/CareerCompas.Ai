import './App.css';
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
// import { Todos } from "./MyComponents/Todos";
// import React, { useState, useEffect } from 'react';
// import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { Test } from "./MyComponents/Test";
  
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {  
  
  return ( 
    <> 
    <Router>
      <Header title="CareerCompass" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Home />
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/test">
          <Test />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
