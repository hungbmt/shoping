import "./Cart.css";
import { InputNumber, Space } from "antd";

const Cart = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <>
      <h6 className="title-product-cart">Giỏ Hàng</h6>
      <div className="cart-product-top">
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-box">
          <div className="img-produc">
            <img
              src="https://images.pexels.com/photos/18999699/pexels-photo-18999699/free-photo-of-bang-gh-dan-ong-ng-i-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="cart-product-right">
            <h5 className="title-product">
              Áo Khoác Có Nón Vải Thun Giữ Ấm Biểu Tượng Dáng Rộng BST Thiết Kế
              Athena Ver1 - Xanh Ve Chai, S
            </h5>
            <div className="cart-produc_rb">
              <div className="product-right-quantity">
                <span>Số Lượng: </span>
                <Space wrap>
                  <InputNumber
                    size="large"
                    min={1}
                    max={100000}
                    placeholder="số lượng"
                    defaultValue={3}
                    onChange={onChange}
                  />
                </Space>
              </div>
              <button className="btn-delete-product">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-product-bt">
        <button>xóa All</button>
        <button>Đặt Hàng</button>
      </div>
    </>
  );
};

export default Cart;
