import React from "react";
import '../style/Navbar.scss'
import {NavLink} from "react-router-dom"
function Navbar(){
    return(
    <div id = "nav">
        <ul id = "bar">
            <li className = "bar_item" id = "bar_item1"><NavLink id = "profile" to="/profile">프로필</NavLink></li>
            <li className = "bar_item" id = "bar_item2"><NavLink id = "country" to="/country">지역별 뭐뭐뭐</NavLink></li>
            <li className = "bar_item" id = "bar_item3"><NavLink id = "web_link" to="/usefullweb">유용한 웹사이트</NavLink></li>
            <li className = "bar_item" id = "bar_item4"><NavLink id = "community" to = "/community">커뮤니티</NavLink></li>
        </ul>
    </div>
        
    )
}
export default Navbar