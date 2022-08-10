import React from "react";
import "./Mainslider.css";
import Main from '../../aces/Img/Main Logo.png'
import Frame from '../../aces/Img/Frame 1.png'

const Mainslider = () =>{
    const listLi = [
        {
            id:'hdit1',
            text:'Home +',
        },
        {
            id:'',
            text:'About',
        },
        {
            id:'',
            text:'Service',
        },
        {
            id:'',
            text:'Gallery',
        },
        {
            id:'',
            text:'Blog',
        },
    ]
    return <div id="pdbg">
        <div id="hd11">
        <div id="hder">
            <div className="hd1" id="hdd1">
                <img src={Main} alt=""/>
            </div>
            <div className="hd1" id="hdd2">
                <ul>

                    {listLi.map((item,index)=>
                         ( <li className="hdit" id={item.id} key={index}>{item.text}</li>)
                    )}
                </ul>
            </div>
            <div class="hd1">
            <button id="hdit2">contact</button>
            </div>

        </div>
        </div>

        <div id="silde">
            <div className="sl1" id="sl12">
                <div id="sl11">
                    
                    <h1>Clinic&beauty <br/>consultant</h1>
                    <p>It is a long established fact that a reader will be <br/>by the readable content of a page.</p>
                    <button id="hdit3">More Details</button>
                
                </div>

            </div>
            <div className="sl1">
                <img src={Frame} alt=""/>

            </div>
        </div>
    </div>
}

export default Mainslider;