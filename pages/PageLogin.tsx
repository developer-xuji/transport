import React from "react";
import styles from "../styles/PageLogin.module.css";
import { Button, Form, Input } from "antd";
import { NextPage } from "next";

type Account = {
  username?: string;
  password?: string;
};

const pageLogin: NextPage = () => {
  const onLogin = (values: any) => {
    window.location.href = "/PageTask";
  };

  const onLoginFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.Layout}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onLogin}
        onFinishFailed={onLoginFailed}
        autoComplete="off"
      >
        <Form.Item<Account>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Account>
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default pageLogin;
