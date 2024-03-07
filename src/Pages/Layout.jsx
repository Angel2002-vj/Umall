import React,{useEffect} from "react";

import { Outlet,useLocation } from "react-router-dom";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";

function Layout(){
    const path=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[path])
    return(
        <div className="home-main">
        
           <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout