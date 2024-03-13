import { Container } from "react-bootstrap";
import Cart from "../../Component/Cart/Cart";
import Banner from "../../Component/Banner/Banner";
import BestSeller from "../../Component/BestSeller/BestSeller";
// import Category from "../../Component/Category/Category";
import imgBn1 from "./../../img/block_home_category3.webp";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllItem } from "../../Redux/apiRequest";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllItem(dispatch);
  }, [dispatch]);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const item = useSelector((state) => state.saveReducer?.get.produc.item);
  return (
    <div className="wrapper">
      {/* banner */}
      <Banner />
      {/* category */}
      {/* <Category /> */}
      {/* item menu */}
      {/* best seller */}
      <div className="BestSeler-Wraper">
        <img src="/" alt="" />
        <Container>
          <h6 className="title-wraper">best Seller</h6>
          {
            <Slider {...settings}>
              {item?.bestSeller?.map((dataBs, idx) => {
                return (
                  <Link
                    to={
                      "/" +
                      dataBs.slug_2 +
                      "/" +
                      dataBs.slug_1 +
                      "/" +
                      dataBs.slug_3 +
                      "/" +
                      dataBs.sttProduct
                    }
                  >
                    <BestSeller
                      idx={idx}
                      imgproduct={dataBs?.samples_id[0]?.samplesImg}
                      title={dataBs?.title}
                      desiption={dataBs?.body}
                      price={dataBs?.price}
                      bestSeller={dataBs?.bestSeller}
                    />
                  </Link>
                );
              })}
            </Slider>
          }
        </Container>
      </div>
      {/* cart new */}
      <h6 className="title-wraper">New Cart</h6>
      <div className="cart-wraper">
        <Container>
          <div className="cartnewss">
            <Slider {...settings}>
              {item?.productAll?.map((dataProduct, idx) => {
                return (
                  <Link
                    to={
                      "/" +
                      dataProduct.slug_2 +
                      "/" +
                      dataProduct.slug_1 +
                      "/" +
                      dataProduct.slug_3 +
                      "/" +
                      dataProduct.sttProduct
                    }
                  >
                    <Cart
                      idx={idx}
                      imgproduct={dataProduct.samples_id[0]?.samplesImg}
                      title={dataProduct.title}
                      desiption={dataProduct.body}
                      price={dataProduct.price}
                      bestSeller={dataProduct.bestSeller}
                    />
                  </Link>
                );
              })}
            </Slider>
            <img className="banner-About" src={imgBn1} alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default React.memo(Home);
