import React from "react";
const Card = ({ Name, Id, Img, Age, Wished }) => {
   
    return (
        <div className="card">
            <div className="card__img">
                <img src={Img} alt={"Avatar of " + Name} />
            </div>
            <div className="card__details">
                <h1 className="card__tittle">{Name}</h1>
                <h3 className="card__subtittle">{Age} years</h3>
            </div>
            <button className="btn btn-sl" onClick={() => Wished(Id)}>Wish</button>
        </div>
    )
}
export default Card;