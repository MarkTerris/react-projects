import React, { useState} from 'react'
import { Button, Container, Toast } from 'react-bootstrap'


export function Messages() {
  const [ show, setShow ] = useState(false)
  const mins = 2

  return (
    <Container>
      <Button onClick={() => setShow(true)} variant="secondary" size="lg">Show message</Button>
      
      <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
        <Toast.Header>
          <strong className="mr-auto">New message</strong>
          <small>{mins} mins ago</small>
        </Toast.Header>
        <Toast.Body>This is message body</Toast.Body>
      </Toast>
    </Container>
  )
}
