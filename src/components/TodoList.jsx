// Prints da stuff
// TableForTask

const TodoList = (props) => {

    console.log(props.list)

    return (
        <table className="table table-striped">
            <thead>
                <tr className="">
                    <th>#</th>
                    <th>uzduotis</th>
                    <th>ar uzbaigtas</th>
                </tr>
            </thead>
            <tbody>
            {
                props.list.map((task, index) =>(
                    <tr key={index}>
                        <th>{index +1}</th>
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