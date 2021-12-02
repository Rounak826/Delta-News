

import React from 'react'
import errorImg from '../Assets/404.svg'
import './Error.css'
export default function Error(props) {
    return (
        <div className="container Error">
            <div className="col-md-4">
            </div>
            <h2>Oops! Cant Find Any News Right Now</h2>
            <img src={errorImg} alt="" />
            <p>{props.message}</p>
        </div>
    )
}
