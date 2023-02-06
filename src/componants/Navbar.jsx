import React from "react";
import '../style/Navbar.scss'
import {NavLink} from "react-router-dom"
function Navbar(){
    return(
    <div id = "nav">
        <ul id = "bar">
            <li className = "bar_item" id = "bar_item1">프로필</li>
            <li className = "bar_item" id = "bar_item2">지역별 뭐뭐뭐</li>
            <li className = "bar_item" id = "bar_item3"><NavLink id = "web_link" to="/usefullweb">유용한 웹사이트</NavLink></li>
            <li className = "bar_item" id = "bar_item4">커뮤니티</li>
        </ul>
    </div>
        
    )
}
export default Navbar