import React from "react";
import "../style/Country.scss";
import Header from "./Header";
import Navbar from "./Navbar";

function Country(){
    return(
        <div id="main">
            <Header/>
            <Navbar/>
        </div>
    );
}
export default Country;