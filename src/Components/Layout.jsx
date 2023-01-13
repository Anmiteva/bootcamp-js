import { Route, Routes } from "react-router";
import React from "react";
import Home from "./Home";
import Menu from "./Menu/Menu";
import About from "./About/About";
import CompleteMenu from "./CompleteMenu/CompleteMenu";

const Layout = () => {

    return <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/complete-menu' element={<CompleteMenu />} />
        </Routes>
}

export default Layout;