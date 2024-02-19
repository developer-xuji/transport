import { NextPage } from "next";
import React from "react";
import { Button, Form, Input } from "antd";

type Task = {
  containerId?: string;
  licensePlate?: string;
};

const PageTask: NextPage = () => {
  const onSubmit = () => {
    window.location.href = "/PageCurrent";
  };

  return (
    <div>
      <div>司机姓名: 张三</div>
      <br />
      <div>司机编号: 001</div>
      <br />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item<Task>
          label="集装箱编号"
          name="containerId"
          rules={[{ required: true, message: "请输入集装箱编号！" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Task>
          label="车辆牌号"
          name="licensePlate"
          rules={[{ required: true, message: "请输入车辆牌号！" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            确认
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PageTask;
