import React from 'react'
import TodoList from './component/TodoList/TodoList'


const App = () => {


  return (
    <div className="App">
      <section className="todo">
           <h2 className="todo__heading">To Do List</h2>
            <TodoList></TodoList>
            
      </section>

    </div>
  )
}

export default App