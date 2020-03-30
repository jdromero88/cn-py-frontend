import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <>
      <Nav
        activeKey="/inicio">
        <Nav.Item>
          <Nav.Link href="/inicio">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/acerca">Acerca</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
