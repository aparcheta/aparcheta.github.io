import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

const AppRoutes = (props) => {
    return (
        <Routes>
            
            <Route path="/" element={<Home user={props.user} />}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="login" element={<Login user={props.user} setUser={props.setUser}/>}/>
        </Routes>

    );
}

export default AppRoutes;