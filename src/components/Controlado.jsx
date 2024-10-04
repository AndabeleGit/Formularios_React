/* eslint-disable react/prop-types */
import { useState } from "react"
import Swal from 'sweetalert2';

const Controlado = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        state: "",
        priority: true,
    })

    // desestructuracion de todo, ya que este almacena title, description, state, priority
    const {title, description, state, priority} = todo

    // El "e.target.value" almacena le valor recolectado
    const handleChange = (e) => {

        // desestructuracion de e.target, ya que este almacena type, value, checked, name
        const {type, value, checked, name} = e.target

        setTodo({
            ...todo, 
            [name]: type === "checkbox" ? checked: value
        })


    }

    // funcion que toma todas les entradas que estan en el formulario (input, textarea, select)
    const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(title, description, state, priority)

    if(!title.trim() || !description.trim()){
      return Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Titulo y descripcion obligatorios',
      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'Completado'
    })

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500
    });

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
        value = {title}
        onChange={handleChange}>
      </input>

      {/* <textarea> Se usa para poder escribir texto plano, como una descripcion */}
      <textarea 
        className="form-control mb2" 
        placeholder='Ingrese Descripcion'
        name='description'
        value = {description}
        onChange={handleChange}>
      </textarea>

      <div className="form-check mb2">
        <input 
            type="checkbox" 
            name="priority" 
            className="form-check-input" 
            id="inputCheck" 
            checked={priority}
            onChange={handleChange}
        />
        <label htmlFor="inputCheck"> Dar Prioridad</label>
      </div>

      {/* <select> Se usa para un formulario de opciones ya predefinidas */}
      <select className='form-select mb2' name='state' value={state} onChange={handleChange}> 
        <option value="Pendiente"> Pendiente</option>
        <option value="Completado"> Completado</option>
      </select>

      <button type='submit' className='btn btn-primary'> Agregar Todo</button>

   </form>
  )
}

export default Controlado;

// El atributo "name" para el FormData, lo cual permite vincular los valores de las etiquetas
// Todo los ClassName es una manera de llamar a las clases de bootStrap
// El atributo placeHolder es un texto de ayuda
// Los "...", es para hacer un copia de todos los valores de un objeto
// el mb2 en los className es la margen que va a tener el componente
// Cada vez que se encuentre un (algo.algo) muy seguido, se puede desestructurar,
// para asi mismo hacer el codigo mas limpio