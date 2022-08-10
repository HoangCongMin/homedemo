import React from "react";
import Main from '../../aces/Img/Main Logo.png'
import ToTop from '../../aces/Img/ToTop Button.png'
import youtube from '../../aces/Img/youtube.png'
import linkedin  from'../../aces/Img/linkedin-in.png'
import minstagram  from'../../aces/Img/instagram (1).png'
import twitter  from'../../aces/Img/twitter (1).png'
import fb  from'../../aces/Img/facebook-f.png'


import "./sitefooter.css";
const sitefooter = () =>{
    return <div id="footer">
        <div className="ft" id="ft1">
            <div className="ft11">
                <img src={Main} alt=""/>
                    <div className="ft12">
                        <p>Beautice is a Beauty Clinic WordPress Theme.</p>
                        <p>Baker Steet 101, NY, United States.</p>
                        <span>+521 569 8966.</span>
                        <span>mail@company.com.</span>
                    </div>
            </div>
            <div className="ft11" >
                <h3>page</h3>
                <div className="ft12">
                    <p>home</p>
                    <p>about</p>
                    <p>Service</p>
                    <p>Gallery</p>
                    <p>team</p>
                </div>
            </div>
            <div className="ft11" id="ft113">
                <h3>
                    information
                </h3>
                <div className="ft12">
                    <p>Terms & conditions</p>
                    <p>Privacy policy</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>

        </div>
        <div className="ft" id="bt">
            <div className="bt1">
                <img src={ToTop} alt=""/>
            </div>
        </div>
        <div className="ft" id="lh">
            <div className="lh1">
                <img src={fb} alt=""/>
                    <img src={youtube} alt=""/>
                        <img src={linkedin} alt=""/>
                            <img src={minstagram} alt=""/>
                                <img src= {twitter}alt=""/>
            </div>
            <div className="lh123">
                <span>© AltDesain Studio 2021 - All right reserved.</span>
            </div>
        </div>

    </div>

}

export default sitefooter;