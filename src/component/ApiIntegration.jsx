import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
const ApiIntegration = () => {

    const [getData, setGetData] = useState([])
    useEffect(() => {
        const data = async () => {
            try {
                const res = await axios.get("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
                setGetData(res.data.data)
                return res.data.data

            } catch (error) {
                console.log(error);
            }
        }
        data()
    });
    return (
        <Container>
            <Row>
                {getData.map((elem, idx) => (
                    <>
                        <Col key={elem.id} sm={12} md={6} lg={3} xl={4} >
                            <Card className='my-3 p-3 rounded'>
                                <Card.Img src={elem.images.small} variant='top' />
                                <Card.Body>
                                    <Row>
                                        <Col sm={12} md={4} lg={3} xl={6} >
                                            <Card.Text style={{ textAlign: "start" }} as='h3'>{elem.name}</Card.Text>
                                        </Col><br /><br />
                                        <Col sm={12} md={4} lg={3} xl={6}>
                                            <Card.Text style={{ textAlign: "end" }}><h5>Hp: <span>{elem.hp}</span></h5> </Card.Text>
                                        </Col>
                                        <Col sm={12} md={4} lg={3} xl={12}>
                                            <Card.Text ><h5 style={{ textAlign: "start" }}>Attacks:</h5> {elem.attacks[0].name}</Card.Text>
                                        </Col><br /><br />
                                        <Col sm={12} md={4} lg={3} xl={6}>
                                            <Card.Text style={{ textAlign: "start" }}><h5 style={{ textAlign: "start" }}>Abilities:</h5> {elem === elem.abilities ? elem.abilities[0].name : "N/A"}</Card.Text>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    )
}

export default ApiIntegration