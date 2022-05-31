import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Particle from './components/Particles/Particle';
import ImageUrlForm from './components/ImageUrlForm/ImageUrlForm';
import Position from './components/Position/Position';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <Particle />

      <Navigation />
      <Logo />
      <Position />
      <ImageUrlForm />
      {/*
      
  <FaceRecognition />*/}
    </div>
  );
}

export default App;
