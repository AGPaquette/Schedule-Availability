import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"

//pages and components
import HomePage from "./Pages/homePage"
import NavBar from "./components/NavigationBar";
//bootstraps
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App form-control">
      <h1 className="container form-control">Schedule App</h1>
      <BrowserRouter>
        <NavBar />
        <div className="form-control">
          <Routes>
            <Route
            path="/"
            element={<HomePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  )
};

export default App;
