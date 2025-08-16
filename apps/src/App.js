
import './App.css';
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import { AddTodo } from "./myComponents/AddTodo";
import { Footer } from "./myComponents/Footer";
import React, { useEffect, useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // deleting this way in react does not work 
    // let  index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.getItem("todos", JSON.stringify(todos));
  }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos])
  // let myvariable = 67;

  return (
    <>
      <Header title="MyTodoList" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <TodoItem/> */}
      <Footer />
    </>
  );
}

export default App
