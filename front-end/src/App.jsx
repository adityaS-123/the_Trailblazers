import React from "react";
import Login from "./components/Login"
import Navbar from "./components/Navbar";
import styles from "./index.css"
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "reactstrap/lib/";
import Signup from "./components/Signup";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route
                path="/login"
                element={
                <>
                    <Navbar />
                    <Login />
                </>
                }
            />
           
            
            <Route 
                path="/signup" 
                element={
                <>
                <Navbar/>
                <Signup/>
                </>
            } />
            
            <Route path="*" element={<h1>galt page</h1>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  

