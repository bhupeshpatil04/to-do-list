import React from 'react'

const TodoItem = ({todo , onDelete}) => {
  let tk={
    "padding-left":"116px"
}
  return (
    <div className="container" style={tk}>
     <h5>{todo.title}</h5>
     <p>{todo.desc}</p>
     <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
