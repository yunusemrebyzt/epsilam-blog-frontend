import React from 'react';
import {ITable} from "./types";
import './SmallCard.scss'
import {useNavigate} from "react-router-dom";

const SmallCard = ({title, subTitle, photo, url}: ITable) => {
    const navigate = useNavigate();
    return (

        <div className={'small-card-main'} onClick={() => navigate(url)}>
            <div className={'left-area'}>
                <img src={photo} alt={title}/>
            </div>
            <div className={'right-area'}>
                <small className={'subtitle'}>{subTitle}</small>
                <h6 className={'title'}>{title}</h6>
            </div>
        </div>
    );
}

export default SmallCard;