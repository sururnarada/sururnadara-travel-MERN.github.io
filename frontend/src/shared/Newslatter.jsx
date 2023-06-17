import React from 'react';
import './newslatter.css';

import { Container, Row, Col } from 'reactstrap';
import maletourist from '../assets/images/male-tourist.png';

const Newslatter = () => {
  return (
    <section className="newslatter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newslatter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newslatter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newslatter__btn">Subscribe</button>
              </div>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aperiam culpa adipisci necessitatibus, qui itaque?</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newslatter__img">
              <img src={maletourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newslatter;
