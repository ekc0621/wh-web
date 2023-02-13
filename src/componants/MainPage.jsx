import React from "react";
import "../style/MainPage.scss";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer"
function MainPage(){
    return(
        <div id = "container_main">
            <Header/>
            <Navbar/>
            <Footer/>
        </div>

    );
}
export default MainPage;