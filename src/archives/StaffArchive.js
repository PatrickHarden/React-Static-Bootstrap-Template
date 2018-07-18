
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

export default withRouteData(({ staff }) => (

  <section>
    <Container>
      <Row>
        <Col xs="12">
          <h1>Our Staff</h1>
        </Col>
      </Row>
      <Row>
        <div className="card-columns">
            {staff.map(staffMember => (
              <Card key={staffMember.id} className={"card-" + staffMember.id}>
                <Link to={`/staff/${staffMember.slug}/`}>
                <CardImg top width="100%" src={(staffMember.better_featured_image) ? ( staffMember.better_featured_image.media_details.sizes.medium.source_url ): '' } />
                </Link>
                  <CardBody>
                    <Link to={`/staff/${staffMember.slug}/`}>
                      <CardTitle>{staffMember.title.rendered}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(staffMember.excerpt.rendered)}</CardText>
                    <CardText><small>{staffMember.date}</small></CardText>
                  </CardBody>
              </Card>
            ))}
        </div>
      </Row>
    </Container>
  </section>
))
