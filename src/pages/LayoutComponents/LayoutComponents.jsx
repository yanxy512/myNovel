/*
 * @Date: 2024-08-19 22:20:17
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-09-01 20:25:49
 * @FilePath: \myNovel\src\pages\LayoutComponents\LayoutComponents.jsx
 */
/*
 * @Date: 2024-08-19 22:20:17
 * @LastEditors: yanxy512 1165705313@qq.com
 * @LastEditTime: 2024-08-27 21:57:10
 * @FilePath: \novel-inspiration\src\pages\LayoutComponents\LayoutComponents.jsx
 */
import React, { useState } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import css from "./LayoutComponents.less";
import Home from "../Home/Home";
import TagCreation from "../TagCreation/TagCreation";
import InspirationCreation from "../InspirationCreation/InspirationCreation";
import Test from "../Test";

const { Header, Sider, Content } = Layout;
const LayoutComponents = (props) => {
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [pathName, setPathName] = useState(location.pathname);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const routeJump = (e) => {
    navigate(e.key, { replace: true });
  };

  return (
    <Layout className={css.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathName]}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: "首页",
            },
            {
              key: "/inspiration-creation",
              icon: <VideoCameraOutlined />,
              label: "灵感",
            },
            {
              key: "/tag-creation",
              icon: <UploadOutlined />,
              label: "创建标签",
            },
            {
              key: "/test",
              icon: <UploadOutlined />,
              label: "测试",
            },
          ]}
          onClick={routeJump}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tag-creation" element={<TagCreation />} />
            <Route
              path="/inspiration-creation"
              element={<InspirationCreation />}
            />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponents;
