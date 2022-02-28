import React from "react";
//import { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Redirect,
} from "react-router-dom";

import Home from './pages/home';
import Propertieslist from "./pages/properties";
import Propertydetail from "./pages/propertydetail";



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/properties' element={<Propertieslist/>} />
          <Route path='/property' element={<Propertydetail/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
