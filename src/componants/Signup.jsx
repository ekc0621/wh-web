import React from "react";
import "../style/Signup.scss";

function Footer(){
    return(
        <div id = "container_signup">
        <div id = "logo">
            <h2> 대충 로고</h2>
        </div>
        <div id = "id">
            <input type = "text" class = "signin_itm" placeholder="아이디를 입력하세요" id = "inputid"></input>
        </div>
        <div id = "pw">
            <input type = "text" class = "signin_itm" placeholder="비밀번호를 입력하세요" id = "inputpw"></input>
        </div>
        <div id = "repw">
            <input type = "text" class = "signin_itm" placeholder="비밀번호를 한 번더 입력하세요" id = "reinputpw"></input>
        </div>
        <div id = "email">
            <input type = "text" class = "signin_itm" placeholder="이메일 입력하세요" id = "inputemail"></input>
        </div>
        <div id = "age">
            <input type = "text" class = "signin_itm" placeholder="나이를 입력하세요" id = "inputage"></input>
        </div>
        <div id = "login">
            <input type = "button" class = "signin_itm" value="로그인 하기" id = "logbtn"></input>
        </div>
    </div>
    );
}
export default Footer;