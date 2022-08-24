import React,{Component} from 'react';
import {IHeader} from "../Header/types";
import {ITable} from "./types";
import './Table.scss'

const Table = ({title,text}:ITable) => {
    return (
        <div >
            <div className="container">
                <div className="card border-dark mb-3">
                    <div className="card-header">
                        <div className="card-body text-dark">
                            <p className="card-text">{title}</p>
                            <h5 className="card-title">{text}</h5>
                        </div>
                    </div>
                    <div className="card-text">
                        <img className="w-100" src="https://images.unsplash.com/photo-1590695607822-6e452bbe558b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                    </div>
                </div>
            </div>


        </div>
    );

}

export default Table;