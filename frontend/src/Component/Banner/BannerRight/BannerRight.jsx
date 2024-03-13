import Slider from "react-slick";
const BannerRight = () => {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="banner-Right_Wraper">
        <Slider {...settings1}>
          <div className="banner-Right_box">
            {/* 1200px x 400px */}
            <img src="/banner/OIG4.0aNWobYu.jpeg" alt="" />
          </div>
          <div className="banner-Right_box">
            {/* 1200px x 400px */}
            <img src="/banner/OIG2.jpeg" alt="" />
          </div>{" "}
        </Slider>
      </div>
    </>
  );
};

export default BannerRight;
