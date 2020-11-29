import React, { useState } from 'react' 
import { Button, ButtonGroup, Badge, Container, Row } from 'react-bootstrap'


export function Counter() {
    const [ counter, setCounter ] = useState(0)
    const onZero = counter < 1

    return (
      <Container>
        <Row className="justify-content-center">
            <h5>Simple counter</h5>
        </Row>

        <Row className="justify-content-center">
          <ButtonGroup>    
            <Button 
              onClick={() => setCounter(prev => prev - 1)} 
              variant="secondary" 
              disabled={onZero}
            >
              Subtract
            </Button>

            <Button variant="secondary" disabled>
              <Badge variant="light">{counter}</Badge>
            </Button>

            <Button 
              onClick={() => setCounter(prev => prev + 1)} 
              variant="primary"
            >
              Add
            </Button>
          </ButtonGroup>
        </Row>
        <hr />
      </Container>
    )
}
