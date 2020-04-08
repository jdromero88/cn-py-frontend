import React from 'react'
import { connect } from 'react-redux'
import ParteItems from '../components/ParteItems'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const arrayTest = ['uno','dos','tres','cuatro','cinco','seis']

const PartesContainers = (props) => {
  console.log(props.partes)
  return (
    <Container>
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
        {props.partes ?
          props.partes.map(parte => <ParteItems key={parte.id} parte={parte}/>)
          :
          null
        }
      </Table>
    </Container>
  )
}
const mapStateToProps = (store) => ({
  partes: store.partes,
})
export default connect(mapStateToProps)(PartesContainers)
