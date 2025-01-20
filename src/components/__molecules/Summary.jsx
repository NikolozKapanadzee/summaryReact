import React from "react";
import './Summary.css';
import flesh from '../../assets/iconoir_flash.svg';
import brain from '../../assets/iconoir_brain.svg';
import remove from '../../assets/iconoir_chat-remove.svg';
import eye from '../../assets/iconoir_eye-empty.svg';
import Button from "../__atoms/Button";



function Summary() {
    return (
        <>
        <div className="big_div">
        <div className="summary">
            <p className="summary_title">Summary</p>
            <div className="copy_divs">
            <div className="copy_div1">
                <div className="role_div1">
                <img src={flesh} alt="" />
                <p className="power1">Reaction</p>
                </div>
                <p className="your_point_sec"><span className="point">80</span> / 100</p>
            </div>
            <div className="copy_div2">
                <div className="role_div1">
                <img src={brain} alt="" />
                <p className="power2">Reaction</p>
                </div>
                <p className="your_point_sec"><span className="point">80</span> / 100</p>
            </div>
            <div className="copy_div3">
                <div className="role_div1">
                <img src={remove} alt="" />
                <p className="power3">Reaction</p>
                </div>
                <p className="your_point_sec"><span className="point">80</span> / 100</p>
            </div>
            <div className="copy_div4">
                <div className="role_div1">
                <img src={eye} alt="" />
                <p className="power4">Reaction</p>
                </div>
                <p className="your_point_sec"><span className="point">80</span> / 100</p>
            </div>
            </div>
        </div>
        <Button />
        </div>
        </>
    )
}

export default Summary;
