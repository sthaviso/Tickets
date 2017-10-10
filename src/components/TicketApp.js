/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import TicketList from '../containers/VisibleTicketList';
import TicketWindow from '../containers/VisibleTicketWindow';
import { Grid, Col, Row } from 'react-bootstrap';

const TicketApp = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={6} className="colPanel" >
        <TicketList/>
      </Col>
      <Col md={6} className="colPanel">
        <TicketWindow/>
      </Col>
    </Row>
  </Grid>
);
export default TicketApp;
