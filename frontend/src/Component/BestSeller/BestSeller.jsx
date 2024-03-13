import { vndMoney } from "../../Config/moneyVnd";
import "./BestSeller.css";
const BestSeller = (Props) => {
  const { idx, imgproduct, title, price, bestSeller } = Props;
  // sum % price of the product
  const discount = price * (1 - bestSeller / 100);
  // làm tròn price số thực rounder product
  let roundedNum = Math.round((discount + Number.EPSILON) * 100) / 100;
  // format price VND
  const vndMoneys = vndMoney.format(roundedNum);
  return (
    <>
      <div className="cartContainer" key={idx}>
        <button className="btn-seller">
          <span>{bestSeller}%</span>
        </button>
        <div className="cart-box">
          <img src={"http://localhost:3000/imgProduc/" + imgproduct} alt="" />
          <div className="price">
            <span>{vndMoneys}</span>
          </div>
          <span className="title-cart">{title}</span>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
