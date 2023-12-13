import React from 'react';
import GoogleMap from './GoogleMap';
import FooterLetter from './FooterLetter';
import SocialButtons from './SocialButtons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainFooter from './MainFooter';


const SecondFooter = () => {
  return (
        <div style={{ width: '100%', background: 'black' }}>
          <Container >
            <Row>
              <Col>
                <GoogleMap />
              </Col>
              <Col>
                <FooterLetter />
                <SocialButtons />
              </Col>
            </Row>
          </Container><MainFooter/>
        </div>
  );
}

export default SecondFooter;
