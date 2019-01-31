import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NavMenu from './NavMenu';

export default props => (
    <Container fluid>
        <Row>
            <Col sm={12}>
                <Row className="justify-content-center">
                    <Col>
                        <NavMenu />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="justify-content-left">
                        {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);
