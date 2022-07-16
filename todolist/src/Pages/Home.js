import React from "react"
import Popup from '../Components/Popup'
import {useState} from 'react'

export default function Home(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
    <div className = "home">
        <h1>Home Page</h1>
        <h1> Events </h1>
        <button onClick={() => setButtonPopup(true)}> Add Event </button>
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            {/* <h3> 
                Name <br />
                Deadline <br />
                Start/End Time <br />
                Priority <br />
                Repeat (Optional) <br />
                Adding Steps for a Task
            </h3> */}
            <form className = "event-log-form">
                <input className = "event-field" type = "text" placeholder = "Name of Event" />
                <br />
                <input className = "submit-field" type="submit" value="Submit" />
            </form>
        </Popup>
    </div>
    )
}