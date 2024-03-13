import { Container } from "react-bootstrap";
import "./FromCreate.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import {
  Form,
  Input,
  Select,
  Divider,
  Button,
  Modal,
  Space,
  Tag,
  theme,
} from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useRef, useEffect } from "react";
import { createProduc } from "../../../Redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const FromCreate = () => {
  let indexCategory = 0;
  let indexGender = 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); //tiêu đề
  const [body, setBody] = useState(""); //content
  const [gender, setGender] = useState(""); //gới tính
  const [price, setPrice] = useState(""); //giá
  const [category, setCategory] = useState(""); //hạng mục,
  const [nameCategory, setNameCategory] = useState("");
  const [itemsCategory, setItemsCategory] = useState([
    "quần",
    "áo",
    "giày",
    "khác",
  ]);
  const [itemsGender, setItemsGender] = useState([
    "thời trang nữ",
    "thời trang nam",
    "mẹ và bé",
    "khác",
  ]);

  const [nameGender, setNameGender] = useState("");
  const inputRef = useRef(null);
  // const [showImages, setShowImage] = useState([]);
  // const [postImages, setPostImages] = useState([]);
  // const [quantity, setQuantity] = useState(""); //số lượng
  // const [tradeMark, setTradeMark] = useState(""); //nhãn hiệu
  // const handleUploadImg = (e) => {
  //   const selectedFiles = e.target.files;
  //   const selectedFilesArray = Array.from(selectedFiles);
  //   const imagesArray = selectedFilesArray.map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   setShowImage((previousImages) => previousImages.concat(imagesArray));
  //   // FOR BUG IN CHROME
  //   e.target.value = "";
  //   setPostImages(selectedFilesArray);
  // };
  const itemPost = useSelector(
    (state) => state?.noSaveRootReduces?.post?.createfm.item
  );

  const AccessTokens = useSelector(
    (state) => state.saveReducer?.auth.login.item?.accessToken
  );
  const decode = jwtDecode(AccessTokens);
  const username = decode?.username;
  const id_item = itemPost?._id;

  // category
  const onCategoryChange = (event) => {
    setNameCategory(event.target.value);
  };
  const addItemCategory = (e) => {
    e.preventDefault();
    setItemsCategory([
      ...itemsCategory,
      nameCategory || `New item ${indexCategory++}`,
    ]);
    setNameCategory("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // gender

  const onGenderChange = (event) => {
    setNameGender(event.target.value);
  };
  const addItemGender = (e) => {
    e.preventDefault();
    setItemsGender([...itemsGender, nameGender || `New item ${indexGender++}`]);
    setNameGender("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // const deleteHandler = (image) => {
  //   setShowImage(showImages.filter((e) => e !== image));
  //   URL.revokeObjectURL(image);
  // };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  //show modal Submit
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
  // add tag
  const { token } = theme.useToken();
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };
  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: "inline-block",
        }}
      >
        {tagElem}
      </span>
    );
  };
  const tagChild = tags.map(forMap);
  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  const HandleSubmit = async (e) => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("body", body);
    formdata.append("price", price);
    formdata.append("tags", tags);
    formdata.append("gender", gender);
    formdata.append("category", category);
    // for (let i = 0; i < postImages?.length; i++) {
    //   formdata.append("postImage", postImages[i]);
    // }
    try {
      createProduc(dispatch, formdata, AccessTokens, navigate, username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <div className="from-admin-wraper">
          <h6>Front Create</h6>
          <Form
            onSubmitCapture={HandleSubmit}
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
            <Form.Item label="Title">
              <Input onChange={(e) => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item label="gender">
              <Select
                onChange={(e) => setGender(e)}
                style={{
                  width: "100%",
                }}
                placeholder="gender"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider
                      style={{
                        margin: "8px 0",
                      }}
                    />
                    <Space
                      style={{
                        padding: "0 8px 4px",
                      }}
                    >
                      <Input
                        placeholder="Please enter item"
                        ref={inputRef}
                        value={nameGender}
                        onChange={onGenderChange}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={addItemGender}
                      >
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={itemsGender.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </Form.Item>
            {/* category */}
            <Form.Item label="category">
              <Select
                onChange={(e) => setCategory(e)}
                style={{
                  width: "100%",
                }}
                placeholder="category"
                dropdownRender={(menu) => (
                  <>
                    {menu}
                    <Divider
                      style={{
                        margin: "8px 0",
                      }}
                    />
                    <Space
                      style={{
                        padding: "0 8px 4px",
                      }}
                    >
                      <Input
                        placeholder="Please enter item"
                        ref={inputRef}
                        value={nameCategory}
                        onChange={onCategoryChange}
                        onKeyDown={(e) => e.stopPropagation()}
                      />
                      <Button
                        type="text"
                        icon={<PlusOutlined />}
                        onClick={addItemCategory}
                      >
                        Add item
                      </Button>
                    </Space>
                  </>
                )}
                options={itemsCategory.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </Form.Item>
            <Form.Item label="Giá">
              <Input
                prefix="￥"
                suffix="VND"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="tags">
              <>
                <div
                  style={{
                    marginBottom: 16,
                  }}
                >
                  <TweenOneGroup
                    enter={{
                      scale: 0.8,
                      opacity: 0,
                      type: "from",
                      duration: 100,
                    }}
                    onEnd={(e) => {
                      if (e.type === "appear" || e.type === "enter") {
                        e.target.style = "display: inline-block";
                      }
                    }}
                    leave={{
                      opacity: 0,
                      width: 0,
                      scale: 0,
                      duration: 200,
                    }}
                    appear={false}
                  >
                    {tagChild}
                  </TweenOneGroup>
                </div>
                {inputVisible ? (
                  <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={{
                      width: 78,
                    }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                  />
                ) : (
                  <Tag onClick={showInput} style={tagPlusStyle}>
                    <PlusOutlined /> New Tag
                  </Tag>
                )}
              </>
            </Form.Item>

            <Form.Item label="body">
              {/* <TextArea rows={4} onChange={(e) => setBody(e.target.value)} /> */}
              <CKEditor
                editor={ClassicEditor}
                data={body}
                onChange={handleEditorChange}
                config={{
                  toolbar: {
                    items: [
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "horizontalLine",
                    ],
                  },
                  language: "en",
                }}
              />
            </Form.Item>
            {/* <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name="postImage"
                multiple
                onChange={handleUploadImg}
              />
              <label htmlFor="file" id="file">
                <img src={addImgIcon} alt="" />
                <span>up to 6 image</span>
              </label>
              <div className="create_img_wraper">
                <Row>
                  {showImages &&
                    showImages.map((image, index) => {
                      return (
                        <Col
                          xl={4}
                          md={6}
                          style={{ height: 200, marginBlock: 10 }}
                        >
                          <div key={index} className="create_img--box">
                            <Image width={200} src={image} />
                            <button onClick={() => deleteHandler(image)}>
                              delete
                            </button>
                            <p>{index + 1}</p>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Form.Item>
            {showImages.length > 0 && showImages.length > 6 ? (
              <p>You can't upload more than 6 images!</p>
            ) : (
              <Button
                type="primary"
                className="center"
                style={{ marginTop: 20 }}
                htmlType="submit"
              >
                submit
              </Button>
            )} */}
            <Button
              type="primary"
              className="center"
              onClick={showModal}
              htmlType="submit"
            >
              submit
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
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  Submit
                </Button>,

                <Button
                  key="link"
                  href={"/admin/" + username + "/" + id_item + "/update"}
                  type="primary"
                  loading={loading}
                  onClick={handleOk}
                >
                  up product
                </Button>,
              ]}
            >
              click vào product để up sản phẩm
            </Modal>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default FromCreate;
