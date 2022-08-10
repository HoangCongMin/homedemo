import React from "react";
import img from "../../aces/Img/Animation2.png";
import Animation1 from "../../aces/Img/Animation1.png";
import Animation3 from "../../aces/Img/Animation3.png";
import Play_button from "../../aces/Img/Play_button.png";
import unsplash_LRXYS0tSyGc from "../../aces/Img/unsplash_LRXYS0tSyGc.png";





import "./aboutus.css";
const Aboutus = () =>{

    let cart=[{
        classname:'cartit',
        img:Animation1,
        name:'Beauty consultation',
        noidung:'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Nonarturient  amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
    },
        {
            classname:'cartit',
            img:img,
            name:'Beauty consultation',
            noidung:'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Nonarturient  amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
        },
        {
            classname:'cartit',
            img:Animation3,
            name:'Beauty consultation',
            noidung:'Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Nonarturient  amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
        },

    ]

    return(<>


    <div id="bgcart">
        <div id="cart">
            <div className="cart1">
                <p className="cart11">main services</p>
                <h1>Lear services to focus <br/> on your beauty</h1>
                <p className="cart12">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non
                    parturient <br/> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>

            <div className="cart1" id="cart13" >

              
                    {cart.map((item,index)=>(
                        
                         <div key={index} className={item.className}>
                            <img src={item.img} alt=""/>
                            <h5>{item.name}</h5>
                            <p>{item.noidung}</p>
                        </div>
                    
                    ))}
                    
                
            </div>
        </div>
        
        <div id="gt">
        
            <div className="gt1">
            <p className="hdab">about us</p>
                <h1>We are the best beauty clinic</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Elit, quam suscipit purus
                    donec <br/> amet. Egestas volutpat facilisi eu libero. Nunc,
                        <br/>ipsum ornare mauris sit quam quis enim. Varius <br/> tellus in suspendisse placerat. <br/>

                            Id dui erat sed quam tellus in purus. Pellentesque <br/> congue fringilla cras tellus enim.
                </p>
                <div className="gt2">
                    <button id="hdit4" className="gt3">lear more</button>
                    <div className="gt3">
                        <img src={Play_button}alt=""/>
                            <span>Watch Video</span>
                    </div>
                </div>
            </div>
            <div className="gt1" id="gt11">
                <img src={unsplash_LRXYS0tSyGc}
                     alt=""/>
            </div>

        </div>
    </div>

    </>)

 }

export default Aboutus;