import React from "react";
import Header from "./header";
function Main(props)
{
    return(<div>
        <Header header={props.header}/>
    </div>)
}
export default Main;