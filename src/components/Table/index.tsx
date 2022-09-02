import React,{Component} from 'react';
import {IHeader} from "../Header/types";
import {ITable} from "./types";
import './Table.scss'

const Table = ({title,text,photo}:ITable) => {
    return (
        <div  >
                    <img className="card-img" src={`images/${photo}`} alt="Card image"/>
                        <div className="card-img-overlay">
                            <div className={"opacity"} >
                                <p className="card-text">{title}</p>
                                <h5 className="card-title cd">{text}</h5>

                            </div>

                        </div>

        </div>
    );

}
{/*<div className="car">
                    <div className="card-header">
                        <div className="card-body text-dark">
                            <p className="card-text">{title}</p>
                            <h5 className="card-title">{text}</h5>
                        </div>
                    </div>
                    <div className="card-text">
                        <img className="card-img " src={`images/${photo}`} alt=""/>
                    </div>
                </div>*/}
export default Table;