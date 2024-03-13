import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { Space, Table } from "antd";
const columns = [
  {
    sl: "sl",
    dataIndex: "sl",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "category",
    dataIndex: "category",
  },
  {
    title: "price",
    dataIndex: "price",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <>edit </>
        <>Delete</>
      </Space>
    ),
  },
];

const FormProduct = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  // const VND = new Intl.NumberFormat("vi-VN", {
  //   style: "currency",
  //   currency: "VND",
  // });
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  // const dataProduct = useSelector(
  //   (state) => state.productItem.produc.item.data
  // );
  const data = [];
  // dataProduct.forEach((element, idx) => {
  //   const vndFM = VND.format(element.price);
  //   data.push({
  //     key: idx,
  //     sl: idx + 1,
  //     name: element.title,
  //     category: element.category,
  //     price: vndFM,
  //   });
  // });

  return (
    <Container>
      <div className="fromCreate-wraper">
        <h4>product</h4>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </Container>
  );
};

export default FormProduct;
