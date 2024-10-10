import React, { useEffect, useState } from "react";
import "../src/index.css";
import Header from "./header";
import Footer from "./footer";
import Notes from "./notes";
import Inp from "./inp.jsx";
let kb = new Date();
function App(props)
{
  const[todo , setodo] = useState([]);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todolist"));
        if (storedTodos) {
          setodo(storedTodos);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(todo));
      }, [todo]);
  function addTodo(title, dec)
  {
    const newtodo = {title:title , dec:dec};
    setodo(prevtodo=>[...prevtodo , newtodo]);
  }
  function ct(todo)
  {
    return <Notes notetitle={todo.title} dec={todo.dec} func={del}/>
  }
  function del(index)
  {
    setodo((prevTodo) => {
      const newTodo = [...prevTodo];
      newTodo.splice(index, 1);
      return newTodo;
    });

  }
  return(<div>
  <Header header="Note Keeper"/>
  <Inp addTodo={addTodo}/>
  <div className="scroll">
  {todo.map(ct)}
  </div>
  <Footer date={kb.getFullYear()} />
  
  </div>)
}
export default App;