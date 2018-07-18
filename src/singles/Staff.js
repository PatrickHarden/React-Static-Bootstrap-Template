
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";
//

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default withRouteData(({ staffMember }) => (
  <section>
    <Helmet>
      <body className={'single-staff staff-id-'+staffMember.id + ' ' + staffMember.slug} />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Staff - {staffMember.title.rendered}</h1>
          {ReactHtmlParser(staffMember.content.rendered)}
        </Col>
      </Row>
    </Container>
  </section>
))
