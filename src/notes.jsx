import React, { useState } from "react";
function Notes(props)
{
    

    return(
        <div className="maincard">
            <div className="notetitle">
                <h1>{props.notetitle}</h1>
            </div>
            <div className="scrollbox">
            <span className="dec">{props.dec}</span>
            </div>
            <button className="del" onClick={props.func} >Delete</button>
        </div>
    )
}
export default Notes;