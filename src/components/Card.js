import React from "react";
import '../style.css'

export default function Card(props){
    return (
        <div className="card--container">
            <div className="card--container--image">
                <img src={`assets/${props.coverImg}`} alt="place here" className="card--container--image--image"></img>
            </div>
            <div className="card--container--description">
                <div className="card--container--description--location">
                    <i className="fas fa-map-marker-alt card--container--description--location--logo"></i>
                    <span className="card--container--description--location--country">{props.country}</span>
                    <a href={props.googleLocation} className="card--container--description--location--link" style={{textDecoration:"none",color:"#918E9B", fontWeight:"400", fontSize:"10.24px"}}>View on Google Maps</a>
                </div>
                <h1 className="card--container--description--title">{props.title}</h1>
                <div className="card--container--description--details">
                    <div className="card--container--description--details--date">
                        <p className="card--container--description--details--date--date">{props.startDate}</p>
                        <p className="card--container--description--details--date--hyphen">-</p>
                        <p className="card--container--description--details--date--date">{props.endDate}</p>
                    </div>
                    <p className="card--container--description--details--details">{props.details}</p>
                </div>
            </div>
        </div>
    )
}