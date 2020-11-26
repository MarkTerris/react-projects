import React, { useState, useEffect } from 'react' 
import { Button, ButtonGroup, Col, Container, Form, Row, Badge } from 'react-bootstrap'

function getRandomInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export function RandIntGenerator() {
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(10)
    const [randInt, setRandInt] = useState(() => {
        return getRandomInt(min, max)
    })

    function handleSubmit(event) {
        event.preventDefault()
        setMin(event.target[0].value)
        setMax(event.target[1].value)
        setRandInt(() => {
            return getRandomInt(min, max)
        })
        console.log(min, max, randInt)
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Random number generator</Form.Label>
                    <Form.Group>
                        <Form.Control defaultValue={min} type="number" placeholder="min" />
                        <Form.Control defaultValue={max} type="number" placeholder="max" style={{'marginTop': '1rem'}} />
                    </Form.Group>

                    <ButtonGroup className="justify-content-center">
                        <Button variant="secondary" type="submit">
                            Generate
                        </Button>

                        <Button variant="secondary" disabled> 
                            Result: <Badge variant="light">{randInt}</Badge>
                        </Button>
                    </ButtonGroup>
                </Form>
            </Row>
            <hr />
        </Container>
    )
}

