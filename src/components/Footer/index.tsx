import React from 'react';
import './Footer.scss'
import {IFooter} from "./types";
import {useNavigate} from "react-router-dom";

const Footer = ({}:IFooter) => {
    const navigate = useNavigate()
    return (
        <div></div>
               /*<div className={'footer-main'}><a className="logo" href="#">LOGO</a>
                   <div className={'left-area-footer'}></div>
                   <div className={'right-area-footer'}></div>
               </div>*/
        )
}

export default Footer;