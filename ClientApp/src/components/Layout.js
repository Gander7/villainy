import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
    <Container fluid>
        <Row className="justify-content-center">
            <Col sm="4" >
                <Row className="justify-content-center">
                    <Col>
                        <NavMenu />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);
