import { vndMoney } from "../../Config/moneyVnd";
import "./Cart.css";
const Cart = (Props) => {
  const { idx, imgproduct, title, price } = Props;
  const vndMones = vndMoney.format(price);

  return (
    <>
      <div className="cartContainer " key={idx}>
        <div className="cart-box ">
          <img src={"http://localhost:3000/imgProduc/" + imgproduct} alt="" />
          <div className="price">
            <span>{vndMones}</span>
          </div>
          <span className="title-cart">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
