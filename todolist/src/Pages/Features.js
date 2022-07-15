import React from "react"

export default function Features(props){
    return(
        <div className = "feature-cards">
        <div className = "feature-card">
                <figure className = "feature-card-image">
                    <img className = "main-img" src = {props.image}  alt = "Feature-image"/>
                </figure>
                <div className = "feature-card-text">
                    <h1>{props.title}</h1>
                    <p>{props.byLine}</p>
                </div>
        </div>
        </div>
    )
}