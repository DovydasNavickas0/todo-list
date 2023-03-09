// the base

import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoBase = () => {

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Clean your room",
        isComplete: false
      },
      {
        id: 2,
        text: "Do your homework",
        isComplete: false
      },
      {
        id: 3,
        text: "To go to the cinema",
        isComplete: false
      }
    ]);

    //console.log(tasks)

    const addToDo = (text) => {
        const newToDo = [...tasks, {text, isCompleted: false}];
    }

  return (
    <div className="TodoBase">
      <TodoForm list={tasks}/>
      <TodoList list={tasks}/>
    </div>
  );
}

export default TodoBase;