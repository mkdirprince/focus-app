import { useState, useEffect, useRef } from "react"
import FocusForm from "./components/FocusForm"
import Task from "./components/Task"
import axios from "axios"

const App = () => {
  const [taskList, setTaskList] = useState([])
  const [todo, setTodo] = useState('')
  
  
  useEffect(()=>{
    axios.get('http://localhost:3001/taskList')
    .then(response => {
      setTaskList(response.data)
    })
  }, [])

  

  const handleTodoChange = (event) => {
    console.log(event.target.value)
    setTodo(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    const taskObject = {
      content: todo,
      checked: false,
    }
    
    axios
    .post('http://localhost:3001/taskList', taskObject)
    .then(response=>{
      setTaskList(taskList.concat(response.data))
      setTodo('')
    })
  }


  const deleteTask = (id) => {
    const task = taskList.find(task => task.id === id)

    if (window.confirm(`Delete "${task.content}" from todos ?`))
    {
      axios
      .delete(`http://localhost:3001/taskList/${id}`)
      .then(response => {
        setTaskList(taskList.filter(task => task.id !== id))
      })
    }
  }

  const toggleCheck = (id) => {

    const url = `http://localhost:3001/taskList/${id}`

    const task = taskList.find(task=>task.id === id)

    const updatedTask = {...task, checked: !task.checked}

    axios
    .put(url, updatedTask)
    .then(response => {
      setTaskList(taskList.map(task => task.id !== id ? task : response.data))
    })
  }


  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-500">Focus</h1>
      </header>
      <FocusForm todo={todo} addTask={addTask} handleTodoChange={handleTodoChange}/>
      <Task taskList={taskList} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
 
    </>
  )
}
export default App
