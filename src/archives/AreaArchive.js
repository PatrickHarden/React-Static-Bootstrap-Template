
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
//

export default withRouteData(({ areas }) => (

  <section>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Practice Areas</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {areas.map(practiceArea => (
              <Card key={practiceArea.id} className={"card-" + practiceArea.id}>
                <Link to={`/practice-area/${practiceArea.slug}/`}>
                  <CardImg top width="100%" src={(practiceArea.better_featured_image) ? ( practiceArea.better_featured_image.media_details.sizes.medium.source_url ): '' } />
                </Link>
                  <CardBody>
                    <Link to={`/practice-area/${practiceArea.slug}/`}>
                      <CardTitle>{practiceArea.title.rendered}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(practiceArea.excerpt.rendered)}</CardText>
                    <CardText><small>{practiceArea.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
