import React from 'react';
import './App.css';
import Login from './components/Login';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Details from './components/Details';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
    
    <Route path ='/Hero'element={<Hero/>}/>
    <Route path ='/Login' element={<Login/>}/>
    <Route path ='/Signup' element={<Signup/>}/>
    <Route path ='Footer'element={<Footer/>}/>
    <Route path ='/Featured'element={<Featured/>}/>
    <Route path ='/Details'element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;