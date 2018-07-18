
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";
//

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default withRouteData(({ practiceArea }) => (
  <section>
    <Helmet>
      <body className={'single-area area-id-'+practiceArea.id + ' ' + practiceArea.slug} />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Practice Area - {practiceArea.title.rendered}</h1>
          {ReactHtmlParser(practiceArea.content.rendered)}
        </Col>
      </Row>
    </Container>
  </section>
))
