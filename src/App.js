import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Login from "./components/Login";
import Home from "./components/Home";
import Appointments from "./components/Appointment"
import AppointmentDetails from "./components/Appointment"
import FormData from "./components/Form";


function App() {


  return <div className="App">
 <Navbar/>
 <Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/home"element={<Home/>}></Route>
  <Route path="/appointments" element={<Appointments/>}></Route>
  <Route path="/appointment/:appointmentId/" element={<AppointmentDetails/>}></Route>
  <Route path="/appointment/add" element={<FormData/>}></Route>
 </Routes>
  </div>;
}

export default App;
