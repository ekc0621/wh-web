import React from "react";
import "../style/MainPage.scss";
import Header from "./Header";
import Navbar from "./Navbar";
function MainPage(){
    return(
        <div id="Mainpage">
            <Header/>
            <Navbar/>
        </div>
    );
}
export default MainPage;