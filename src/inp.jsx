import React, { useState } from "react";
function Inp(props)
{
    // const[note , setnote] = useState(
    //     {
    //         title:"",
    //         content:""
    //     }
    // );
    // function change(event)
    // {
    //     const{name , val} = event.target;
    //     setnote(prevnote=>
    //         {
    //             return  { ...prevnote,[name] : val};
    //         })
    // }
    const[title , settile]=useState("");
    const[dec , setdec]=useState("");
    function changetitle(event)
    {
        settile(event.target.value);
        console.log(title);
    }
    function changedec(event)
    {
        setdec(event.target.value);
        console.log(dec);
    }
    function sub(e)
    {
        e.preventDefault();
        props.addTodo(title,dec);
    }

   
    return(<>
        <div className="inpbox">
            <form>
                <input type="text" onChange={changetitle} className="tit" value={title} name="title" placeholder="Enter The Heading"/>
                <br/>
                <input type="text" className="cn" onChange={changedec} name="content" value={dec} placeholder="Enter The Note"/>
                <br/>
                <button onClick={sub}>Add</button>
            </form>
        </div>
    </>)
}
export default Inp;