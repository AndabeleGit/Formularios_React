import { useState } from "react";
import Controlado from "./components/Controlado";
import Todos from "./components/Todos";

const initialStateTodos = [
  {
    id: 1,
    title: "1",
    description: "1",
    state: true,
    priority: true
  },

  {
    id: 2,
    title: "2",
    description: "2",
    state: false,
    priority: false
  },

  {
    id: 3,
    title: "3",
    description: "3",
    state: false,
    priority: true
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Controlado addTodo = {addTodo}/>
      {/* Nombre propiedad = {Valor} */}
      <Todos todos = {todos}/>
    </div>
  );
};

export default App;