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
import FeaturesData from './FeaturesData'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQPjfGR6FWK2Zk7-5PBcNkw1GkZ8_PyJM",
  authDomain: "todolist-f3638.firebaseapp.com",
  projectId: "todolist-f3638",
  storageBucket: "todolist-f3638.appspot.com",
  messagingSenderId: "1032884602612",
  appId: "1:1032884602612:web:43748613540c39128c00a1",
  measurementId: "G-0BLWTYT3NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {

  const featureCards = FeaturesData.map(feature => {
    return <Features key = {feature.id} {...feature}/>
  })
  return (
    <div className="App">
      <Navigation />
      <div className = "sections">
        <Routes>
          <Route path = '/home' element = {<Home />} />
          <Route path = '/accomplishments' element = {<Accomplishments />} />
          <Route path = '/customization' element = {<Customization />} />
          <Route path = '/features' element = {featureCards} />
          <Route path = '/documentation' element = {<Documentation />} />
          <Route path = '/aboutus' element = {<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}


