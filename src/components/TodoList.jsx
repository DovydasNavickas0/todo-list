// Prints da stuff
// TableForTask

const TodoList = (props) => {

    console.log(props.list)

    return (
        <table>
            <thead>
                <tr>
                    <th>eil nr.</th>
                    <th>uzduotis</th>
                    <th>ar uzbaigtas</th>
                </tr>
            </thead>
            <tbody>
            {
                props.list.map((task, index) =>(
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{task.text}</td>
                        <td>{task.isCompleted ? "Done" : "Still in progress..."}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
  }
  
  export default TodoList;