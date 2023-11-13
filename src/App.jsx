//import { useState } from 'react'
import NavBar from "./components/NavBar.jsx";
import './App.css'
import {Route, Router, Routes} from "react-router-dom"
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
   return (
    <>
        <NavBar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default App
