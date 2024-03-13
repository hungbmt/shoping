import React, { memo, useEffect, useState } from "react";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Modal } from "antd";
import "./FormUpdataSize.css";
// import { apiUpdateSize } from "../../../../Redux/apiRequest";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ApiGetImgProduct, apiUpdateSize } from "../../../../Redux/apiRequest";

const FormUpdataSize = () => {
  const itemImgProduct = useSelector(
    (state) => state.saveReducer?.getImgProduct?.imgproducts?.item?.data
  );
  const item = useSelector((state) => state.saveReducer.get.produc.item);
  const nameUser = item?.decoded;
  const accessToken = item?.AccessTokens;
  console.log(accessToken);
  const localhost = "http://localhost:3000/imgProduc/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsId = useParams();
  const productId = paramsId.id;
  const sampleID = paramsId.prouctId;
  useEffect(() => {
    ApiGetImgProduct(dispatch, productId, sampleID, accessToken);
  }, [dispatch, productId, sampleID, accessToken]);
  const onFinish = (values) => {
    const { users } = values;
    apiUpdateSize(dispatch, productId, sampleID, users, navigate, accessToken);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="form-update_bottom">
      <div className="form-img-product-wraper">
        <form className="form-img-Product-box">
          <img
            className="img-product-update"
            src={localhost + itemImgProduct?.samplesImg}
            alt=""
          />
          <input type="file" />
        </form>
      </div>

      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, type, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "masize"]}
                    type={[type, "masize"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing first name",
                      },
                    ]}
                  >
                    <Input placeholder="Size" name="masize" type="masize" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "quantity"]}
                    type={[type, "quantity"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Quantity"
                      name="quantity"
                      type="quantity"
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button> */}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={showModal} htmlType="submit">
            Open Modal with customized footer
          </Button>
          <Modal
            open={open}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button
                key="link"
                href={
                  "/admin/" + nameUser.username + "/" + productId + "/update"
                }
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                upload Sản Phẩm
              </Button>,
              <Button
                key="link"
                href={"/"}
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                Home
              </Button>,
            ]}
          >
            đằng size thành công
          </Modal>
        </Form.Item>
      </Form>
    </div>
  );
};

export default memo(FormUpdataSize);
