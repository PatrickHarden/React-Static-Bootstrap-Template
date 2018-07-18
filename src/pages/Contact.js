import React from 'react'
import { withRouteData, Link, SiteData, withSiteData } from 'react-static'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import {Helmet} from "react-helmet";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import ContactForm from '../sections/ContactForm'

var lat = ''
var long = ''

function saveCord(options) {
  lat = parseFloat(options.companyLocationLat)
  long = parseFloat(options.companyLocationLong)
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: lat, lng: long }}
    options={{
      scrollwheel: false,
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: lat, lng: long }} />}
  </GoogleMap>
))


export default withSiteData(({options}) => (
  <article id="contact">
    <Helmet>
      <body className="contact" />
    </Helmet>
    {saveCord(options)}
    <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      
    />
    <Container>
      <Row>
        <Col xs="12">
          <h1>Contact</h1>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </article>
  
))
