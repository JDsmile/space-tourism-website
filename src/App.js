
import './css/App.css';
import React, {useContext}from 'react';
import Header from './components/Header'
import {BrowserRouter as Router} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Homepage  from './pages/Homepage'
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import HomeMoblie from "./assets/home/background-home-mobile.jpg"




function App() {

  

  return (

      <Router>
            <Header/>  
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/destination" element={<Destination />}/>
              <Route path="/crew" element={<Crew />}/>
              <Route path="/technology" element={<Technology />}/>
            </Routes>
      </Router>
  
  );
}

export default App;
