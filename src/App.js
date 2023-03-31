
import React from 'react';
import Home from './component/Home';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Projek from './component/Projek';
import Client from './component/Client';
import Blog from './component/Blog';

function App() {
  return (
    
    
    <div className=" w-full h-screen">
    <Navigation/>
    <Home/>
    <HeroSection/>
    <Projek/>
    <Client/>
    <Blog/>
    
 
    </div>
    
   
   
    
  );
}

export default App;
