import React from "react"
import Addtodo from "./components/Addtodo"
import Todos from "./components/Todos"
import { useSelector } from "react-redux"
function App() {

  const todos = useSelector(state => state.todos);

  return (
    <>
      <h1 className="p-4 bg-gray-900 text-white">Hello</h1>
      <Addtodo />
      {todos.map((todo) => (
        <Todos key={todo.id} todo={todo} />
      ))}
      
    </>
  )
}

export default App
