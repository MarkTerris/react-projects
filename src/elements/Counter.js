import React, { useState } from 'react' 
import { Button, ButtonGroup, Container, Badge } from 'react-bootstrap'


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
        <ButtonGroup>    

          <Button onClick={decrement} variant="secondary" size="lg" disabled={onZero}>-</Button>

          <Button onClick={decrement} variant="secondary" size="lg" disabled>
            <Badge variant="light">{counter}</Badge>
          </Button>

          <Button onClick={increment} variant="secondary" size="lg">+</Button>

        </ButtonGroup>
      </Container>
    )
}
