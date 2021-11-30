


const Card = (props) => {
    return (
        <div className="col">

            <div className="card">
                <img className="card-img-top" src={props.img} alt="Card image cap" />
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