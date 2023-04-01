import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./components/Header/Header";
import Preheader from "./components/Header/Preheader";
import Body from "./components/MainPage/BodyConv";
import About from "./components/AboutUs/About";


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
