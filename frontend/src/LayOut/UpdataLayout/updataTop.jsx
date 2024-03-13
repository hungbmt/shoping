import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../Redux/apiRequest";
import { useParams } from "react-router-dom";

const UpdataTop = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state.saveReducer?.auth?.login?.item?.accessToken
  );

  const item = useSelector((state) => state.saveReducer?.put.updata?.item);
  console.log(item);

  const { id } = useParams();
  const handleUpdateTop = (event) => {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    updateData(dispatch, id, data, accessToken);
  };

  return (
    <>
      <h6>Form Updata</h6>
      <div className="form-update_top">
        <Form
          onSubmitCapture={handleUpdateTop}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 1200,
          }}
        >
          <Form.Item label="title">
            <Input defaultValue={item?.title} />
          </Form.Item>
          <Form.Item label="category">
            <Input defaultValue={item?.category} />
          </Form.Item>
          <Form.Item label="price">
            <Input defaultValue={item?.price} type="price" name="price" />
          </Form.Item>
          <Form.Item label="best Seller">
            <Input
              defaultValue={item?.bestSeller}
              type="bestSeller"
              name="bestSeller"
            />
          </Form.Item>
          <Button
            type="primary"
            className="center"
            style={{ marginTop: 20 }}
            htmlType="submit"
          >
            submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdataTop;
