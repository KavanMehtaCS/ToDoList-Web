import './App.css';
import React from 'react';
import Navigation from './Navigation'
import { Routes, Route } from "react-router-dom" 
import Home from "./Pages/Home"
import Features from "./Pages/Features"
import Documentation from "./Pages/Documentation"
import AboutUs from "./Pages/AboutUs"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className = "sample-text">
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/features' element = {<Features />} />
          <Route path = '/documentation' element = {<Documentation />} />
          <Route path = '/aboutus' element = {<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}


