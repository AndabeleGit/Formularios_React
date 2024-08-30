import { useState } from "react"

export const Controlado = () => {

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        state: ""
    })


// funcion que toma todas les entradas que estan en el formulario (input, textarea, select)
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(todo.title, todo.description, todo.state)
}

  return (
   <form onSubmit={handleSubmit}>

      {/* <input> Se usa para crear controles interactivos para formularios 
      basados en la web con el fin de recibir datos del usuario */}
      <input
        type="text" 
        placeholder='Ingrese Todo' 
        className='form-control mb2 '
        name = "title"
        value = {todo.title}
        onChange={e => setTodo({...todo, title: e.target.value})}>
      </input>

      {/* <textarea> Se usa para poder escribir texto plano, como una descripcion */}
      <textarea 
        className="form-control mb2" 
        placeholder='Ingrese Descripcion'
        name='description'
        value = {todo.description}
        onChange={e => setTodo({...todo, description: e.target.value})}>
      </textarea>

      {/* <select> Se usa para un formulario de opciones ya predefinidas */}
      <select className='form-select mb2' name='state' value={todo.state} onChange={e => setTodo({...todo, state: e.target.value})}> 
        <option value="Vacio"> --</option>
        <option value="Pendiente"> Pendiente</option>
        <option value="Completado"> Completado</option>
      </select>

      <button type='submit' className='btn btn-primary'> Procesar</button>

   </form>
  )
}

export default Controlado;

// El atributo "name" para el FormData, lo cual permite vincular los valores de las etiquetas
// Todo los ClassName es una manera de llamar a las clases de bootStrap
// El atributo placeHolder es un texto de ayuda
