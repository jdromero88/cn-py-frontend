import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Parte = () => {
  return(
    <Container>
      <Button variant="secondary">Agregar</Button>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Numero</th>
              <th>Titulo</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td><Button variant="secondary">Editar</Button></td>
              <td><Button variant="secondary">Eliminar</Button></td>
            </tr>
          </tbody>
        </Table>
    </Container>
  )
}

export default Parte
