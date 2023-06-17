import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection.jsx';
import { Container, Row, Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';

import TourCard from '../shared/TourCard.jsx';
import Newslatter from './../shared/Newslatter.jsx';

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);
  // console.log(data);

  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No toour found</h4>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newslatter />
    </>
  );
};

export default SearchResultList;
