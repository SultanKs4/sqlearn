import SiderComponent from "./Sider";
import { Layout } from "antd";

const { Content, Footer } = Layout;

function PageLayout({ children, role }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent role={role} />
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
