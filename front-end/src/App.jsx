import React from "react";
import Signup from "./components/Signup"
import styles from "./index.css"
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "reactstrap/lib/";
import Login from "./components/Login";
import HospLogin from "./components/admin/HospLogin";
import DocLogin from "./components/doctor/docLogin";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route
                path="/login"
                element={
                <>
                    <Login />
                </>
                }
            />
            <Route 
                path="/signup" 
                element={
                <>
                <Signup/>
                </>
            } />
            <Route
                path="/admin/login"
                element={
                <>
                    <HospLogin/>
                </>
                }
            />
            <Route
                path="/doctor/login"
                element={
                <>
                    <DocLogin/>
                </>
                }
            />
            
            <Route path="*" element={<h1>galt page</h1>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  

