const Task = ({taskList, deleteTask, toggleCheck}) => {

  return (
    <>
      { taskList.map(task => 
        <p key={task.id} className="mb-4">
          <input 
          type="checkbox" 
          name="task" 
          id={`task_${task.id}`} 
          checked={task.checked} 
          onChange={()=>toggleCheck(task.id)}
          className="mr-2 bg-gray-900"/>
          <label htmlFor={`task_${task.id}`}> 
            {task.content}
          </label>
          <button onClick={() => deleteTask(task.id)} className="text-gray-400 ml-2 hover:text-red-500">
            Delete
          </button>
        </p>
      )}
    </>
  )
}

export default Task