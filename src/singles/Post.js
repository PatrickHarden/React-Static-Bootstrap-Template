import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ post }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+post.id + ' ' + post.slug} />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>{post.title.rendered}</h1>
          {ReactHtmlParser(post.content.rendered)}
        </Col>
      </Row>
    </Container>
  </section>
))
