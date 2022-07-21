// ? Sebelum sync untuk deploy pastikan callbackUrl nya bener

import SiderComponent from "./Sider";
import { Layout, Menu, Dropdown, Row, Col } from "antd";
import {
  UserOutlined,
  DownOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
const { Content, Footer, Header } = Layout;

function PageLayout({ children, role }) {
  const { data: session } = useSession();

  const [collapsed, setCollapsed] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

  const onClick = () => signOut({ callbackUrl: "http://localhost:3000/login" });

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: "logout",
          icon: <PoweroffOutlined />,
          label: "Logout",
        },
      ]}
    />
  );

  useEffect(() => {
    if (session !== undefined) setLoggedInUser(session?.user?.name);
  }, [session]);

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
            <Col> {`Welcome, ${loggedInUser} !`} </Col>
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
