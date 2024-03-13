import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer-wraper">
        <Container>
          <h3 className="Logo logoFt">HelloAz</h3>
          <Row>
            <Col>
              <div className="footer-box-inf">
                <Row>
                  <h5>VỀ CHÚNG TÔI</h5>
                  <span>Chúng tôi là ai</span>
                  <span>Tuyển dụng</span>
                  <span>Trả góp 0% lãi suất qua thẻ</span>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="footer-box-inf">
                <Row>
                  <h5>CÁC CHÍNH SÁCH</h5>
                  <span>Chúng tôi là ai</span>
                  <span>Tuyển dụng</span>
                  <span>Trả góp 0% lãi suất qua thẻ</span>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
