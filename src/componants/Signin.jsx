import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Signin.scss";

export default function Signin(){
    return(
        <div id = "container_signin">
            <div id = "logo">
                <h2> 대충 로고</h2>
            </div>
            <div id = "id">
                <input type = "text" class = "signin_itm" placeholder="아이디를 입력하세요" id = "input_id"></input>
            </div>
            <div id = "pw">
                <input type = "text" class = "signin_itm" placeholder="비밀번호를 입력하세요" id = "input_pw"></input>
            </div>
            <div id = "login">
                <input type = "button" class = "signin_itm" value="로그인 하기" id = "log_btn"></input>
            </div>
            <div id = "oth_log">
                <div id = "naver">
                    <input type = "button" class = "signin_itm" value="네이버로 로그인 하기" id = "nav_btn"></input>
                </div>
                <div id = "google">
                    <input type = "button" class = "signin_itm" value="구글로 로그인 하기" id = "goo_btn"></input>
                </div>
                <div id = "kakao">
                    <input type = "button" class = "signin_itm" value="카카오로 로그인 하기" id = "ka_btn"></input>
                </div>
            </div>
            <div class = "oth_func1" >
                <div id = "signup">  
                    <NavLink to = "/sign_up" id = "sign_up_link">회원가입 하기</NavLink>
                </div>
            </div>
            
            <div class="oth_func">
                
                <div id = "findpw_sec">
                    <NavLink to = "/find_pw" id = "find_pw_link">비밀번호/아이디 찾기</NavLink>
                </div>
            </div>
        </div>
    );
}
