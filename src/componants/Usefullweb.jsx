import React from "react";
import "../style/Usefullweb.scss"
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
export default function Usefullweb(){
    return(
        <div class = "container_web">
            <Header/>
            <Navbar/>
            <div class ="web_chart">
                <div class ="web_itm">
                    <div class = "web_img">
                        
                    </div> 
                    <div class = "web_name">

                    </div>
                    <div class="web_desc">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}