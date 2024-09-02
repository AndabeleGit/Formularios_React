import Todo from "./Todo";

/* eslint-disable react/prop-types */
const Todos = ({todos}) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
            <Todo key = {todo.id} todo ={todo}></Todo>
          ))}
      </ul>
    </div>
  )
}

export default Todos;
