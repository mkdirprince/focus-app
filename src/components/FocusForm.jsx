const FocusForm = ({addTask, todo, handleTodoChange}) => {
  return (
    <>
      <form onSubmit={addTask}>
        <input type="text" name="todo" id="todo" placeholder="New task..." value={todo} onChange={handleTodoChange}  autoFocus className="mb-8 bg-gray-800 text-gray-100 outline-none"/>
      </form>
    </>
  )
}

export default FocusForm