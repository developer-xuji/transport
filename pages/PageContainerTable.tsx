import React from "react";
import { Space, Table, Tag } from "antd";
import styles from "../styles/PageContainerTable.module.css";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  containerID: string;
  ship: string;
  type: string;
  train: string;
  destination: string;
  enterTime: string;
}

const data: DataType[] = [
  {
    key: "1",
    containerID: "001",
    ship: "abc",
    type: "矿粉",
    train: "456",
    destination: "def",
    enterTime: "2024-02-11",
  },
  {
    key: "2",
    containerID: "002",
    ship: "Green",
    type: "煤",
    train: "London No. 1 Lake Park",
    destination: "def",
    enterTime: "2024-02-11",
  },
  {
    key: "3",
    containerID: "003",
    ship: "Black",
    type: "矿粉",
    train: "Sydney No. 1 Lake Park",
    destination: "def",
    enterTime: "2024-02-11",
  },
];

const PageContainerTable: React.FC = () => (
  <div className={styles.wrapper}>
    <Table dataSource={data} className={styles.layout}>
      <Column title="集装箱编号" dataIndex="containerID" key="containerID" />
      <Column title="船名" dataIndex="ship" key="ship" />
      <Column title="品名" dataIndex="type" key="type" />
      <Column title="列车车次" dataIndex="train" key="train" />
      <Column title="目的地" dataIndex="destination" key="destination" />
      <Column title="入场时间" dataIndex="enterTime" key="enterTime" />
      <Column
        title="操作"
        key="action"
        render={(_: any, record: DataType) => (
          <Space size="middle">
            <a className={styles.label}>编辑</a>
          </Space>
        )}
      />
    </Table>
  </div>
);

export default PageContainerTable;
