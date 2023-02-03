import React from "react";
import '../style/Navbar.scss'

function Navbar(){
    return(
    <div id = "nav">
        <ul id = "bar">
            <li className = "bar_item" id = "bar_item1">프로필</li>
            <li className = "bar_item" id = "bar_item2">지역별 뭐뭐뭐</li>
            <li className = "bar_item" id = "bar_item3">유용한 웹사이트</li>
            <li className = "bar_item" id = "bar_item4">커뮤니티</li>
        </ul>
    </div>
        
    )
}
export default Navbar