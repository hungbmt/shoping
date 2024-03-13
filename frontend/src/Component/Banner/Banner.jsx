import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl={3}>
            <BannerLeft />
          </Col>
          <Col xl={9}>
            <BannerRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
