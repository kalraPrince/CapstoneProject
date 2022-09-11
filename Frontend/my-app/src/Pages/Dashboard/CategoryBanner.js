import React from "react"
import { Container, Row, Col } from "reactstrap"

import "./CategoryBanner.css"
export default function CategoryBanner() {
  return (
    <div className="banner-section">
      <Container fluid>
        <Row>
          <Col lg="4">
            <div className="singlee-banner">
              <img src={require("./sofa.jpg")} alt="" />
              <div className="inner-text">
              <h4><a href="sofachairs">Sofa</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("./dinning.jpg")} alt="" />
              <div className="inner-text">
                <h4><a href="dinning">Dinning</a> </h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("./garden.jpg")} alt="garden" />
              <div className="inner-text">
              <h4><a href="Garden">Garden</a> </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}