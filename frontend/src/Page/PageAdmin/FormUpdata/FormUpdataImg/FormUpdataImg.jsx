import "./FormUpdate.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";
// import Typography from "antd/es/typography/Typography";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ApiUpdataProduct, updateData } from "../../../../Redux/apiRequest";
const FormUpdataImg = () => {
  const [imgProduct, setImgProduct] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const putProduct = useSelector(
    (state) => state?.noSaveRootReduces?.putImg.updataImg.item
  );

  const producImgID = putProduct?._id;
  console.log("producImgID:", producImgID, "id:", id);
  const accessToken = useSelector(
    (state) => state.saveReducer.get.produc?.item?.AccessTokens
  );
  useEffect(() => {
    const data = {};
    updateData(dispatch, id, data, accessToken);
  }, [dispatch, id, accessToken]);

  const HandleProductImg = (e) => {
    const formData = new FormData();
    formData.append("samplesImg", imgProduct.originFileObj);
    ApiUpdataProduct(dispatch, id, formData, accessToken);
    // navigate("/admin/hung/" + id + "/" + producImgID + "/update ");
  };

  return (
    <>
      <h6>add update</h6>
      <div className="form-update_bottom">
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
          size="large"
        >
          <Upload
            onChange={(e) => setImgProduct(e.file)}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
          {!putProduct ? (
            <div className="submit-box">
              <button className="btn-submit-img" onClick={HandleProductImg}>
                {" "}
                upload{" "}
              </button>
            </div>
          ) : (
            <Link to={"/admin/hung/" + id + "/" + producImgID + "/update "}>
              <div className="submit-box">
                <button className="btn-submit-img"> next </button>
              </div>
            </Link>
          )}
        </Space>
      </div>
    </>
  );
};

export default FormUpdataImg;
