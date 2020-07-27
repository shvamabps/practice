import React from 'react';
import { Card, CardColumns, Container, Row, Col } from 'react-bootstrap';



class GCard extends React.Component {
    render() {
        const profile = this.props;
        const s = profile.avatar_url;
        return (
            <Container>
                <Row>
                    <Col>
                        <CardColumns>
                            <Card style={{ width: '18rem', marginTop: '5px', }}>
                                <Card.Img variant="top" src={s} />
                                <Card.Body>
                                    <Card.Title>{profile.name}</Card.Title>
                                    <Card.Text>{profile.html_url}</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        );
    }
}

GCard.CardList = undefined;


export default GCard;