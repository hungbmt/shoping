import { Col, Container, Row } from "react-bootstrap";
import "./SubPage.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiAddToCart, apiGetSubpage } from "../../Redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  className: "slider-img-conection",
};
const Subpage = () => {
  const locohost = "http://localhost:3000/imgProduc/";
  const itemData = useSelector(
    (state) => state?.saveReducer?.getSubpage?.subpage?.item?.data
  );
  const itemCodeProduct = useSelector(
    (state) => state?.saveReducer?.getSubpage?.subpage?.item?.codeProducts
  );
  const [isSize, setSize] = useState(itemCodeProduct?.sizeId[0]?.masize);

  const { codeProduct, slug_1, slug_2, slug_3, sttProduct } = useParams();
  const codeProducts = codeProduct || itemData?.samples_id[0]?.codeProduct;
  const dispatch = useDispatch();
  useEffect(() => {
    apiGetSubpage(dispatch, slug_2, slug_1, slug_3, sttProduct, codeProducts);
  }, [codeProduct, dispatch, slug_1, slug_2, slug_3, sttProduct, codeProducts]);
  const getUser = useSelector((state) => state).saveReducer.get.produc.item;
  const accessToken = getUser?.AccessTokens;
  const productId = itemData?._id;
  const userId = getUser?.decoded?.id;
  const title = itemData?.title;
  const price = itemData?.price;
  console.log(codeProducts);
  const imgPriduc = locohost + itemCodeProduct?.samplesImg;
  const HandleAddTocart = (product) => {
    const formData = {
      productId,
      userId,
      maSize: isSize,
      codeProduct: codeProducts,
      imgProduct: imgPriduc,
    };
    console.log(formData);
    apiAddToCart(dispatch, productId, formData, accessToken);
  };
  return (
    <div className="subpage-product_wraper">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="subpage-product_left">
              <div className="subpage-product_main">
                <img src={imgPriduc} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="subpage-product-right">
              <h3>{title}</h3>
              <div className="subpage-product-box">
                <span className="subpage-product_code-name me-2 fs-5 mt- fw-semibold">
                  Mã:
                </span>
                <span className="subpage-product_code">
                  #{itemCodeProduct?.codeProduct}
                </span>
              </div>
              {itemData?.bestSeller >= 1 ? (
                <>
                  <div className="subpage-product-box">
                    <span className="subpage-product_price-name me-2 fs-6 fw-semibold">
                      Giá Gốc:
                    </span>
                    <span className="subpage-product_price text-danger fw-bold">
                      <s>{price}</s>
                    </span>
                  </div>{" "}
                  <div className="subpage-product-box">
                    <span className="subpage-product_sale-name me-2 fs-5 fw-bold ">
                      Giá sale:
                    </span>
                    <span className="subpage-product_sale fs-4 fw-semibold text-danger">
                      {itemData?.price}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <span className="subpage-product_price-name me-2 fs-6 fw-semibold">
                    Giá Gốc:
                  </span>
                  <span className="subpage-product_price text-danger fw-bold">
                    <span>{itemData?.price}</span>
                  </span>
                </>
              )}
              {/* <div className="subpage-product-box">
                <span className="subpage-product_price-name me-2 fs-6 fw-semibold">
                  Giá Gốc:
                </span>
                <span className="subpage-product_price text-danger fw-bold">
                  <s>{itemData?.price}</s>
                </span>
              </div>{" "}
              <div className="subpage-product-box">
                <span className="subpage-product_sale-name me-2 fs-5 fw-bold ">
                  Giá sale:
                </span>
                <span className="subpage-product_sale fs-4 fw-semibold text-danger">
                  {itemData?.price}
                </span>
              </div> */}
              <div className="subpage-product-box">
                <span className="subpage-product_sale-name me-2 fs-5 fw-bold">
                  Thông Tin Sản Phẩm :
                </span>
                <p
                  className="subpage-product_sale"
                  dangerouslySetInnerHTML={{ __html: itemData?.body }}
                ></p>
              </div>
              <div className="subpage-product_size-wraper">
                {itemCodeProduct?.sizeId.map((item, ix) => (
                  <div className="subpage-product_size-box" key={ix}>
                    <button
                      key={ix}
                      className={
                        isSize === item.masize
                          ? "btn btn-subpage-product_size active"
                          : "btn btn-subpage-product_size"
                      }
                      onClick={(e) => setSize(e.target.innerText)}
                    >
                      {item.masize}
                    </button>
                    <button className="acticveHb">
                      <span>SL: {item.quantity}</span>
                    </button>
                  </div>
                ))}
              </div>
              <button className="btn-add-to-cart" onClick={HandleAddTocart}>
                add to card
              </button>
              <h6 className="me-2 mb-3 fs-5 fw-bold">Sản phẩm tương tự:</h6>
              <div className="subpage-product_conection-box">
                <Slider {...settings}>
                  {itemData?.samples_id?.map((items, inx) => (
                    <Link
                      className="subpage-product_conection-img"
                      to={`/${
                        slug_2 +
                        "/" +
                        slug_1 +
                        "/" +
                        slug_3 +
                        "/" +
                        sttProduct +
                        "/" +
                        items.codeProduct
                      }`}
                      key={inx}
                    >
                      <img
                        src={
                          "http://localhost:3000/imgProduc/" + items?.samplesImg
                        }
                        alt=""
                      />
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subpage;
