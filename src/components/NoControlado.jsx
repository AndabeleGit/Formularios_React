// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'

export const NoControlado = () => {

  // Para capturar de forma manual los valores puestos por el usuario en el formulario, 
  // se usa useRef() y se añade el ref en el <form (ref={form})
const form = useRef(null)

// funcion que toma todas les entradas que estan en el formulario (input, textarea, select)
const handleSubmit = (e) =>{
  e.preventDefault()

  // Capturar los datos
  const data = new FormData(form.current)
  const {title, description, state} = Object.fromEntries([...data.entries()],)

  console.log(title, description, state)

  // Validar los datos
  if (!title.trim()) return console.log("llena el campo")

}

  return (
   <form onSubmit={handleSubmit} ref={form}>

      {/* <input> Se usa para crear controles interactivos para formularios 
      basados en la web con el fin de recibir datos del usuario */}
      <input
        type="text" 
        placeholder='Ingrese Todo' 
        className='form-control mb2 '
        name = "title">
      </input>

      {/* <textarea> Se usa para poder escribir texto plano, como una descripcion */}
      <textarea 
        className="form-control mb2" 
        placeholder='Ingrese Descripcion'
        name='description'>
      </textarea>

      {/* <select> Se usa para un formulario de opciones ya predefinidas */}
      <select className='form-select mb2' name='state'> 
        <option value="Vacio"> --</option>
        <option value="Pendiente"> Pendiente</option>
        <option value="Completado"> Completado</option>
      </select>

      <button type='submit' className='btn btn-primary'> Procesar</button>

   </form>
  )
}

export default NoControlado;

// El atributo "name" para el FormData, lo cual permite vincular los valores de las etiquetas
// Todo los ClassName es una manera de llamar a las clases de bootStrap
// El atributo placeHolder es un texto de ayuda
