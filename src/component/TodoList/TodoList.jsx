import React, { useState } from "react";
import './TodoList.scss';

const TodoList = (props) =>{

   
    const [todos, setTodoList] = useState([]); //to make it a list have to be a empty square bracket
    
    const [userInput, setUserInput] = useState("");

    const onInputChange = (event) =>{
        setUserInput(event.currentTarget.value)
    }

    const addTask = (userInput)=>{
        let copy = [...todos];
        copy = [...copy, userInput];
        setTodoList(copy)
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        addTask(userInput);
        setUserInput("");

    }

    const toDOMap = todos.map((todo) => {
        return <li>{todo}</li>
    })
    
    return (
        <>
        {/* <p>{listsArr}</p> */}
        <form>
            {/* <label>To DO List</label> */}
            <input type="text" value={userInput} onChange={onInputChange}></input>
            <button onClick={onFormSubmit}>To Do List</button>
            <ul>{toDOMap}</ul>


        </form>
          </>
        )

}

export default TodoList