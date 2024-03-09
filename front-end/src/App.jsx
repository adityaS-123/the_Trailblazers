import React from "react";
import Login from "./components/Login"
import Page from "./components/dashboard/page";
import Signup from "./components/Signup"
import styles from "./index.css"
import "reactstrap/lib/";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "reactstrap/lib/";
import HospLogin from "./components/admin/HospLogin";
import DocLogin from "./components/doctor/docLogin";
import HospSignup from "./components/admin/HospRegis";
import HospDash from "./components/admin/HospDash";
import DocPanel from "./components/doctor/docPanel";

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
                path="/mydashboard"
                element={
                  <>
                    <Page />
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
                path="/admin/panel"
                element={
                <>
                    <HospDash/>
                </>
                }
            />
            <Route
                path="/admin/login"
                element={
                <>
                    <HospLogin/>
                </>
                }
            />
            <Route
                path="/admin/signup"
                element={
                <>
                    <HospSignup/>
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
            <Route
                path="/doctor/panel"
                element={
                <>
                    <DocPanel/>
                </>
                }
            />
            
            
            <Route path="*" element={<h1>galt page</h1>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  

