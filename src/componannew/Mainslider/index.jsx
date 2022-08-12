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
        <div id="pdbg1">
        <div id="hd11">
        <div id="hder">
            <div className="hd1" id="hdd1">
                <img src={Main} alt=""/>
            </div>
            <div className="" id="hdd2">
                <ul className="navpc">

                    {listLi.map((item,index)=>
                         ( <li className="hdit" id={item.id} key={index}>{item.text}</li>)
                    )}
                </ul>
            </div>
            <div class="" id="bt2">
            <button id="hdit2">Contact</button>
            </div>
            <label class="hd1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
        </svg>
        <input type="checkbox" hidden id="navip" />
        <label for="navip" className="overley"></label>
        < div className="nav-moble">
            <label for="navip" className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
            </label>
            <ul className="list-moblie">
            <li className="link-moblie">Home</li>
            <li className="link-moblie">About</li>
            <li className="link-moblie">Service</li>
            <li className="link-moblie">Gallery</li>
            <li className="link-moblie">Blog</li>
            </ul>
        </div>
        </label>

        </div>
        </div>

        <div id="silde">
            <div className="sl1" id="sl12">
                <div id="sl11">
                    
                    <h1>Clinic & beauty <br/>consultant</h1>
                    <p>It is a long established fact that a reader will be <br/>by the readable content of a page.</p>
                    <button id="hdit3">More Details</button>
                
                </div>

            </div>
            <div className="sl1" id="sl13">
                <img src={Frame} alt=""/>

            </div>
        </div>
    </div>
    </div>
}

export default Mainslider;