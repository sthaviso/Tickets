/**
 * Created by sthavisomboon on 6/29/17.
 */
import React from 'react';
import TicketList from './TicketList';
import TicketWindow from './TicketWindow';
import { Grid, Col, Row } from 'react-bootstrap';

export default class TicketApp extends React.Component
{
  render()
  {
    return (
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
  }
}
