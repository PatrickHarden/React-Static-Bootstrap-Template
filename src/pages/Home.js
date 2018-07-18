import React from 'react'
import { withSiteData, Link } from 'react-static'
import {Helmet} from "react-helmet";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)

//
import { 
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption } from 'reactstrap';
import LazyHero from 'react-lazy-hero';
import ContactForm from '../sections/ContactForm'

var headerImg = 'https://unknews.unk.edu/wp-content/uploads/2016/11/Lawyer-Rotator-1024x585.jpg'
var testimonialImg = 'https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/hero-car-crash.jpg'
var areaIcon1 = 'https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/dotted-circle_car-crash.svg'
var areaIcon2 = 'https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/dotted-circle_truck-crash.svg'
var areaIcon3 = 'https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/dotted-circle_motorcycle-crash.svg'
var areaIcon4 = 'https://s3.amazonaws.com/ex3-clients/attorneytemplate/wp-content/uploads/2018/05/dotted-circle_injury.svg'

export default withSiteData(() => (
  <article id="home">
  <Helmet>
      <body className="home" />
    </Helmet>
    <LazyHero className="parallax header" imageSrc={headerImg} isCentered={false} opacity={0} parallaxOffset={30}>
      <Container>
        <Row>
          <Col md={7}>
          </Col>
          <Col md={5} className="headerContent">
            <h1>Been In An Accident?</h1>
            <h2>We Can Help!</h2>
          </Col>
        </Row>
      </Container>
    </LazyHero>
    <section id="about" className="padded">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="text-left">How Can A <strong>Car Accident Lawyer</strong> Help Me?</h2>
          </Col>
          <Col md={6}>
            <div class='embed-container'><iframe src='https://player.vimeo.com/video/100902001' frameBorder='0'></iframe></div>
          </Col>
        </Row>
      </Container>
    </section>
    <LazyHero className="parallax testimonial" imageSrc={testimonialImg} isCentered={false} isFixed={true} opacity={0} parallaxOffset={30}>
      <Container>
        <Row>
          <Col md={5} className="testimonialContent">
            <h2>Attorney was there for my family and I when we thought all was lost. I cannot thank him enough!</h2>
            <p><strong> - John Smith</strong></p>
          </Col>
        </Row>
      </Container>
    </LazyHero>
    <section id="areas" className="padded bg-light">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="text-center">Call Us For Help With:</h2>
          </Col>
          <Col md={3}>
            <img src={areaIcon1} />
            <h4>Car Accidents</h4>
          </Col>
          <Col md={3}>
            <img src={areaIcon2} />
            <h4>Truck Accidents</h4>
          </Col>
          <Col md={3}>
            <img src={areaIcon3} />
            <h4>Motorcycle Accidents</h4>
          </Col>
          <Col md={3}>
            <img src={areaIcon4} />
            <h4>Personal Injury</h4>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="contact-home" className="padded">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="text-left">Contact Us</h2>
            <p>We will examine your case and advise you on the best way to proceed with your claim. Put our experience and national reputation as negotiators, litigators, and educators to work for you. </p>
            <Link to="tel:555-987-6543">Call: (555) 987-6543</Link>
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
    <section id="social" className="padded">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <FontAwesomeIcon icon="facebook" />
          </Col>
        </Row>
      </Container>
    </section>
  </article>
))
