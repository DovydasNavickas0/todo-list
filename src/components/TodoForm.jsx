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
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Task</Form.Label>
        <Form.Control type="text" placeholder="Enter new task"
        value={inputValue} onChange={event => setinputValue(event.target.value)}/>
      </Form.Group>
    </Form>
  );
}

export default TodoForm;