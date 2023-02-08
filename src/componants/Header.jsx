import React from "react";
import "../style/Header.scss";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
export default function Header(){
    return(
            <div id="Header">
                <div id = "logo_sec" className = "header_itm">
                    <div id ="logo">
                        <NavLink to="/" class = "header_logo"><h2>대충 로고</h2></NavLink>
                    </div>
                </div>
                <div id = "search_sec" className = "header_itm">
                    <input type = "text" id = "search" placeholder="검색어를 입력해주세요"></input>
                </div>
                <div id = "oth_fun_sec" className = "header_itm">
                    <div id = "signin">
                        <NavLink to ="/sign_in" id="signin_link">로그인</NavLink>
                    </div>
                    <div id = "signup">
                        <NavLink to ="/sign_up" id="signup_link">회원가입</NavLink>
                    </div>
                    
                </div>
            </div>
        
        
    );
}
