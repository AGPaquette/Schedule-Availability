import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import "./App.css";
import TextBox from "./components/textBox";
import DaysList from "./components/employeeAvailabilty";
import StaticButton from "./components/staticButton";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App from-control">
      <h1 className="container">Schedule App</h1>
      <BrowserRouter>
      <DaysList></DaysList>
      <StaticButton></StaticButton>
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
