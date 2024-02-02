import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../ReactApp/components/Home";
import About from "../../ReactApp/components/About";
import Header from "../../HelloWorld/components/header/Header";

const AppRouter = ({movies}) => {

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="home" element={<Home movieArray={movies}/>} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter