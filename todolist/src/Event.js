import React from 'react';
import Popup from './components/Popup'

export default function Event() {
    return (
        <div>
            <h1> Events </h1>
            <button> Add New Event </button>
            <Popup trigger = {true}> 
                <h3> My Popup </h3>
            </Popup>
        </div>
    );
 }

