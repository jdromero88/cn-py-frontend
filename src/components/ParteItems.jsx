import React from 'react'
import Button from 'react-bootstrap/Button'
const ParteItems = (props) => {
  console.log(props);
  const {numero, titulo} = props.parte
  return(
    <tbody>
      <tr>
        <td>#</td>
        <td>{numero}</td>
        <td>{titulo}</td>
        <td><Button variant="secondary">Editar</Button></td>
        <td><Button variant="secondary">Eliminar</Button></td>
      </tr>
    </tbody>
  )
}

export default ParteItems
