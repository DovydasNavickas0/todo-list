// adds new tasks
// FormForTask

import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const TodoForm = ({addToDo}) => {

  const [inputValue, setinputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue) return;
    addToDo(inputValue);
    setinputValue('')
  }

  return (
    <Form onSubmit={handleSubmit} className="text-center ps-5 pe-5">
      <Form.Group className="mb-5 mt-5 p-5" controlId="formBasicEmail">
        <Form.Label>New Task</Form.Label>
        <Form.Control className="" type="text" placeholder="Enter new task"
        value={inputValue} onChange={event => setinputValue(event.target.value)}/>
      </Form.Group>
    </Form>
  );
}

export default TodoForm;