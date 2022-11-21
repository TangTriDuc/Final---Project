import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <div className="page-container">

    <div className="content-wrap">
      <Header /> 
      <Home />    
        
    </div>
      <Footer />
         
      
    </div>
  );
}

export default App;
