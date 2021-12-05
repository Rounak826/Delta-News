

import React from 'react'

import './Error.css'
export default function Error(props) {
    return (
        <div className="container Error">
            <div className="col-md-4">
            </div>
            <h2>{props.head}</h2>
            <img src={props.img} alt="" />
            <p>{props.message}</p>
            {props.children}
        </div>
    )
}
