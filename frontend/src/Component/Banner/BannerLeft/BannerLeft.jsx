import { useState } from "react";

const BannerLeft = () => {
  const [clickone, setClickone] = useState(false);
  const [clickTwo, setClickTow] = useState(false);
  const [hide, setHide] = useState("active");
  const [hides, setHides] = useState("");
  const handleClickOne = () => {
    setClickone(true);
    setClickTow(false);
    if (clickone === false || clickTwo === true) {
      setClickone(true);
      setHide("active");
      setHides("");
    }
  };
  const handleClicktwo = () => {
    setClickone(false);
    setClickTow(true);
    if (clickTwo === true) {
      setHides("active");
      setHide("");
    }
  };
  return (
    <div className="banner-left">
      <ul>
        <li onClick={handleClickOne}>Doanh mục</li>
        <li onClick={handleClicktwo}>Thương hiệu</li>
      </ul>
      <div className={`path-category ${hide}`}>
        <span>
          {" "}
          <i class="fa-solid fa-hand-point-right"></i>Tất cả sản phẩm
        </span>
        <span>
          {" "}
          <i class="fa-solid fa-child-dress"></i>Thời trang nữ
        </span>
        <span>
          <i class="fa-solid fa-person"></i>Thời trang nam
        </span>
        <span>
          <i class="fa-solid fa-person-breastfeeding"></i>Mẹ và bé
        </span>
        <span>
          <i class="fa-solid fa-gem"></i>trang sức
        </span>
        <span>
          <i class="fa-solid fa-hat-wizard"></i>Phụ kiện
        </span>
        <span>
          <i class="fa-solid fa-shoe-prints"></i>Giày nam
        </span>
        <span className="mb-3">
          {" "}
          <i class="fa-solid fa-shoe-prints"></i>Giày nữ
        </span>
      </div>
      <div className={`tap-content ${hides}`}></div>
    </div>
  );
};

export default BannerLeft;
