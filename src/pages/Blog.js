
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,
         Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         CardSubtitle } from 'reactstrap';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ posts }) => (

  <section>
    <Helmet>
      <body className="blog" />
    </Helmet>
    <Container>
      <Row>
        <Col xs="12">
          <h1>News &amp; Updates</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {posts.map(post => (
              <Card key={post.id} className={"card-" + post.id}>
                <Link to={`/blogs/${post.slug}/`}>
                  <CardImg top width="100%" src={post.better_featured_image.media_details.sizes.medium.source_url} />
                </Link>
                  <CardBody>
                    <Link to={`/blogs/${post.slug}/`}>
                      <CardTitle>{post.title.rendered}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(post.excerpt.rendered)}</CardText>
                    <CardText><small>{post.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
