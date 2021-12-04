
import React from 'react';

import "./Card.css"
const Card = (props) => {
    return (
        <div className="col-md-3 py-3">

            <div className="card">
                <img className="card-img-top" src={props.img} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <small>{props.author}</small>
                </div>
                <div className="card-footer">
                    
                    <a className="btn btn-dark" href={props.link} target="_blank" rel="noreferrer">Read More</a>
                    
                </div>
            </div>
        </div>


    )
}

export default Card;