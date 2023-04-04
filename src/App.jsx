import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./components/header/Header";
import Preheader from "./components/header/Preheader";
import Body from "./components/mainPage/BodyConv";
import About from "./components/aboutUs/About";



function App() {
    return (
        <div className="">
            <header>
                <Preheader/>
                <Header/>
            </header>

            <Routes>
                <Route path={"/"} element={<Body/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
