import React from 'react';
import Popup from './Components/Popup'
import {useState} from 'react'

export default function Event() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
    <div>
        <h1> Events </h1>
        <button onClick={() => setButtonPopup(true)}> Add Event </button>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <h3> My Popup </h3>
        </Popup>
    </div>
    )
}