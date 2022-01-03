import React from "react";

import { Layout, Breadcrumb } from "antd";
import SiderComponent from "../../components/Sider";
import Head from "next/head";

const { Content, Footer } = Layout;

function NilaiMahasiswa() {
  return (
    <>
      <Head>
        <title>SQLearn | Mahasiswa - Lihat Nilai </title>
      </Head>
      <Layout style={{ minHeight: "100vh" }}>
        <SiderComponent role="mahasiswa" />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Ini Lihat Nilai
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

export default NilaiMahasiswa;
