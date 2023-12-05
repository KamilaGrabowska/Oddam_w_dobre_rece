import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import React from "react";


function App ()  {


  return (

      <Router>
          <Routes>
          <Route path="/" element={<div>Hello world!</div>} />
          <Route path="/" element={<div>Hello world!</div>} />
          </Routes>
      </Router>


  );
}

export default App
