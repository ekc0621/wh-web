import React from "react";
import "../style/Profile.scss";
import Header from "./Header";
import Navbar from "./Navbar";

function Profile(){
    return(
        <div id="main">
            <Header/>
            <Navbar/>
        </div>
    );
}
export default Profile;