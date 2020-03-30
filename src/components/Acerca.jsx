import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Acerca() {
  return (
    <React.Fragment>
      <Container fluid>
      <Row className="justify-content-md-center">
        <h1>CONSTITUCIÓN DE LA REPÚBLICA DEL PARAGUAY</h1>
      </Row>
      <Row className="justify-content-md-center">
        <h3>Asunción, 20 de junio de 1992</h3>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
        <p>El pueblo paraguayo, por medio de sus legítimos representantes reunidos en
  Convención Nacional Constituyente, invocando a Dios, reconociendo la
  dignidad humana con el fin de asegurar la libertad, la igualdad y la justicia,
  reafirmando los principios de la democracia republicana, representativa,
  participativa y pluralista, ratificando la soberanía e independencia
  nacionales, e integrado a la comunidad internacional, SANCIONA Y
  PROMULGA esta Constitución.</p>   
      </Col>
      </Row>
      </Container>
    </React.Fragment>
  )
}
