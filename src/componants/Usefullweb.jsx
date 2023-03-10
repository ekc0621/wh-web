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
                <a href="https://whic.mofa.go.kr/whic/main/">
                    <div class ="web_itm itm_1" >
                        <div class = "web_img" >
                            <img class = "img_sec img1" src="data:image/jpeg;base64,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"></img>
                        </div> 
                        <div class = "web_name">
                            <h2>????????? ?????????????????? ????????????</h2>
                        </div>
                        <div class="web_desc">
                            <h3>
                            ???????????? ?????????????????? ?????? ????????? ?????????<br/>
                            ????????? ??????2010?????? ????????? ?????????<br/>
                            ?????????????????????.  
                            </h3>
                       </div>
                    </div>
                </a>
                <a href="https://www.hojunara.com/index.php">
                    <div class ="web_itm itm_3" >
                        <div class = "web_img" >
                            <img class = "img_sec img3" src="https://www.hojunara.com/_dsm/images/logo/logo63cdba672aa46.png"></img>
                        </div> 
                        <div class = "web_name">
                            <h2>????????????</h2>
                        </div>
                        <div class="web_desc">
                            <h3>
                            ???????????? ????????? ?????????,????????????,?????????,<br/>
                            ???,????????? ????????? ????????? ????????????<br/>
                            ???????????? ?????? ???????????? ?????????.
                            </h3>
                       </div>
                    </div>
                </a>
                <a href="https://www.gumtree.com.au/">
                    <div class ="web_itm itm_4" >
                        <div class = "web_img" >
                            <img class = "img_sec img4" src="https://www.cision.co.uk/content/dam/cision-uk/resources/GumTree-LOGO.png"></img>
                        </div> 
                        <div class = "web_name">
                            <h2>Gum tree</h2>
                        </div>
                        <div class="web_desc">
                            <h3>
                            ???????????? ????????? ?????????,????????????,?????????,<br/>
                            ???,????????? ????????? ????????? ????????????<br/>
                            ???????????? ?????? ???????????? ?????????.
                            </h3>
                       </div>
                    </div>
                </a>
                <a href="https://www.carsales.com.au/">
                    <div class ="web_itm itm_5" >
                        <div class = "web_img img5" >
                            <img class = "img_sec" src="https://avatars.githubusercontent.com/u/6355775?s=280&v=4"></img>
                        </div> 
                        <div class = "web_name">
                            <h2>Car sales</h2>
                        </div>
                        <div class="web_desc">
                            <h3>
                            ???????????? ???????????? ????????? ????????? <br/>
                            ??? ??????????????????.<br/>
                            </h3>
                       </div>
                    </div>
                </a>                
            </div>
        </div>
    );
}