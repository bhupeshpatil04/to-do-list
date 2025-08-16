import React from 'react'
import TodoItem from "./TodoItem";


const Todos = (props) => {
  let myStyle={
    minHeight: "80vh",
    margin:  "40px auto"
    }
  return (  
    <div className="container " style={myStyle}>
    <h4 className="text-center my-2">Todos List</h4>
    {props.todos.length==0 ?  "No todos to display":
    props.todos.map((todo)=>{
      return (
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
      )
    })}
    </div>
  )
}

export default Todos
