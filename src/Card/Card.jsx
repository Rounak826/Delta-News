
import React from 'react';

import "./Card.css"
const Card = (props) => {
    return (
        <div className="col-md-3 py-5">

            <div className="card">
                <img className="card-img-top" src={props.img} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{props.author}</small>
                </div>
            </div>
        </div>


    )
}

export default Card;