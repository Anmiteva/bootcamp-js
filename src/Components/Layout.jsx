import { Route, Routes } from "react-router";
import Home from "./Home";
import Menu from "./Menu/Menu";
import About from "./About/About";



const Layout = () => {
    return <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
}

export default Layout;
