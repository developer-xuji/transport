import React from "react";
import { Button, Form, Input } from "antd";

type Container = {
  containerId?: string;
  ship?: string;
  type?: string;
  train?: string;
  destination?: string;
  enterTime?: string;
};

const PageContainer: React.FC = () => {
  const onConfirm = () => {};
  return (
    <div>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onConfirm}
          autoComplete="off"
        >
          <Form.Item<Container>
            label="集装箱编号"
            name="containerId"
            rules={[{ required: true, message: "请输入集装箱编号" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Container>
            label="船名"
            name="ship"
            rules={[{ required: true, message: "请输入船名" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Container>
            label="品名"
            name="type"
            rules={[{ required: true, message: "请输入品名" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Container>
            label="火车列次"
            name="train"
            rules={[{ required: true, message: "请输入火车列次" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Container>
            label="目的地"
            name="destination"
            rules={[{ required: true, message: "请输入目的地" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Container>
            label="入场时间"
            name="enterTime"
            rules={[{ required: true, message: "请输入入场时间" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PageContainer;
