import './App.css';
import React from 'react';
import Navigation from './Navigation'
import { Routes, Route } from "react-router-dom" 
import Home from "./Pages/Home"
import Features from "./Pages/Features"
import Accomplishments from "./Pages/Accomplishments"
import Documentation from "./Pages/Documentation"
import AboutUs from "./Pages/AboutUs"
import Customization from "./Pages/Customization"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className = "sample-text">
        <Routes>
          <Route path = '/home' element = {<Home />} />
          <Route path = '/accomplishments' element = {<Accomplishments />} />
          <Route path = '/customization' element = {<Customization />} />
          <Route path = '/features' element = {<Features />} />
          <Route path = '/documentation' element = {<Documentation />} />
          <Route path = '/aboutus' element = {<AboutUs />} />

        </Routes>
      </div>
    </div>
  );
}


