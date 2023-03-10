// the base
// ToDoMain

import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoBase = () => {

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Clean your room",
        isCompleted: false
      },
      {
        id: 2,
        text: "Do your homework",
        isComplete: false
      },
      {
        id: 3,
        text: "To go to the cinema",
        isCompleted: false
      }
    ]);

    //console.log(tasks)

    const addToDo = (text) => {
        const tempVar = [...tasks, {text, isCompleted: false}];
        setTasks(tempVar)
    }

  return (
    <div className="TodoBase">
      <TodoForm addToDo={addToDo}/>
      <TodoList list={tasks}/>
    </div>
  );
}

export default TodoBase;