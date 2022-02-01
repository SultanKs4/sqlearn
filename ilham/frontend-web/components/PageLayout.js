import SiderComponent from "./Sider";
import { Layout, Menu, Dropdown, Row, Col } from "antd";
import {
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { useRouter } from "next/router";
import { useState } from "react";
const { Content, Footer, Header } = Layout;

function PageLayout({ children, role, username = "1841720076" }) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  const onClick = () => router.push("/auth/login");

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1" style={{ padding: "1em" }}>
        Logout <PoweroffOutlined />{" "}
      </Menu.Item>
    </Menu>
  );

  if (role === "mahasiswa") username = "1841720076";
  else if (role === "admin") username = "admincoba";
  else username = "Dosen Coba";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent
        role={role}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <Layout
        className="site-layout"
        style={{ marginLeft: collapsed ? 60 : 200 }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row
            justify="space-between"
            style={{ padding: "0 3em", color: "white" }}
          >
            <Col> {`Welcome, ${username} !`} </Col>
            <Col>
              <Dropdown overlay={menu} arrow>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined style={{ fontSize: "2em", color: "white" }} />
                  <DownOutlined style={{ fontSize: "1em", color: "white" }} />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          SQLearn - JTI Polinema
          <br />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
