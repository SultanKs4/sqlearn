import React from "react";

import { Layout, Breadcrumb } from "antd";
import SiderComponent from "../../components/Sider";
import Head from "next/head";

const { Content, Footer } = Layout;

function DaftarKelas() {
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Kelas </title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderComponent />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Ini kelas
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default DaftarKelas;
