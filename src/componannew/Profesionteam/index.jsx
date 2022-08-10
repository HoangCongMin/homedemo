import React from "react";
import unsplash_mEZ3PoFGs_k from '../../aces/Img/unsplash_mEZ3PoFGs_k.png'
import Facebook from '../../aces/Img/Facebook.png'
import Twitter from '../../aces/Img/Twitter.png'
import Instagram from '../../aces/Img/Instagram.png'
import unsplash_FVh_yqLR9eA from '../../aces/Img/unsplash_FVh_yqLR9eA.png'
import unsplash_pTrhfmj2jDA from '../../aces/Img/unsplash_pTrhfmj2jDA.png'
import Contact from '../../aces/Img/Contact Animations.png'




import "./profesionteam.css";
const Profesionteam = () =>{
    let menber=[{
        classname:'mb1',
        img:unsplash_mEZ3PoFGs_k,
        maa:'Dermatologist',
        name:'Bella sebastian',
        noidung:'Lorem ipsum dolor sit amet consectetur adipiscing elit ut  aliquam, purus sit',
        fb:Facebook,
        tw:Twitter,
        ig:Instagram


    },
    {
        classname:'mb1',
        img:unsplash_FVh_yqLR9eA,
        maa:'Surgeon',
        name:'Briyan Nevalli',
        noidung:'Lorem ipsum dolor sit amet, consectetur adipiscing elitut  aliquam, purus sit',
        fb:Facebook,
        tw:Twitter,
        ig:Instagram
    },
    {
        className:'mb1',
        img:unsplash_pTrhfmj2jDA,
        maa:'Stylist expert',
        name:'Lilly Adams',
        noidung:'Lorem ipsum dolor sit amet consectetur adipiscing elit ut  aliquam, purus sit',
        fb:Facebook,
        tw:Twitter,
        ig:Instagram
    },
]
    return (<div id="bgtem">

        <div id="tem">
            <p className="fess">Professional Teams</p>
            <h1>The Professional expert</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            <div className="menber">
                {menber.map((item,index)=>(
                  
                    <div className={'mb1'} key={index}>
                        <div>
                        <img src={item.img} alt=""/>
                            <p className="menber11">{item.maa}</p>
                            <h3>{item.name}</h3>
                            <p className="menber12">{item.noidung}</p>
                            <div>
                                <img src={item.fb} alt=""/>
                                <img src={item.tw} alt=""/>
                                <img src={item.ig} alt=""/>
                            </div>
                            </div>
                    </div>
                )
                )}
                
            </div>
        </div>
        



        <div id="contacus">

            <div className="contacus2">
                <img src={Contact} alt=""/>
            </div>
            <div className="contacus2">
                <p>contact us</p>
                <h1>Send your inquiry to <br/>
                    our expert team</h1>
                <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                <div className="ctus">
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                </div>
                <div className="ctus1">
                    <input type="text" placeholder="email address"/>
                    <input type="text" placeholder="subject message"/>
                    <textarea className="ttabout" placeholder="your in queri here"></textarea>

                </div>
                <button id="hdit5">More Details</button>

            </div>


        </div>
    </div>)
}

export default Profesionteam;