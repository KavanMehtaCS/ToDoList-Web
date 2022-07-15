import React from "react"

export default function Features(props){
    return(
        <div className = "feature-card">
                <img className = "main-img" src = {props.image}  alt = "Feature-image"/>
            <div className = "feature-card-text">
                    <h1 className = "feature-card-title">{props.title}</h1>
                    <p className = "feature-card-byline">{props.byLine}</p>
                </div>
        </div>
    )
}