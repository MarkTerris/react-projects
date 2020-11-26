import React, { useState } from 'react' 
import { Button, ButtonGroup, Badge, Container, Row } from 'react-bootstrap'


export function Counter() {
    const [ counter, setCounter ] = useState(0)
    
    function increment() {
      setCounter(prev => prev + 1)
    }
  
    function decrement() {
      setCounter(prev => prev - 1)
    }

    const onZero = counter < 1

    return (
      <Container>
        <Row className="justify-content-center">
          <ButtonGroup>    
            <Button onClick={decrement} variant="secondary" disabled={onZero}>-</Button>

            <Button onClick={decrement} variant="secondary" disabled>
              <Badge variant="light">{counter}</Badge>
            </Button>

            <Button onClick={increment} variant="secondary">+</Button>
          </ButtonGroup>
        </Row>
        <hr />
      </Container>
    )
}
