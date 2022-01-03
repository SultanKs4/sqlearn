import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";

import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";

const { Sider } = Layout;

function SiderComponent() {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    console.log(router.pathname.split("/"));
  }, [router]);

  const onCollapse = statusCollapse => setCollapsed(statusCollapse);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        selectedKeys={router.pathname.split("/")[2]}
        mode="inline"
      >
        <Menu.Item
          key="jadwal"
          icon={<PieChartOutlined />}
          onClick={() => {
            router.push("/dosen/jadwal");
          }}
        >
          Jadwal
        </Menu.Item>
        <Menu.Item
          key="kelas"
          icon={<DesktopOutlined />}
          onClick={() => {
            router.push("/dosen/kelas");
          }}
        >
          Kelas
        </Menu.Item>
        <Menu.Item
          key="studi-kasus"
          icon={<DesktopOutlined />}
          onClick={() => {
            router.push("/dosen/studi-kasus");
          }}
        >
          Studi Kasus
        </Menu.Item>
        <Menu.Item
          key="soal"
          icon={<DesktopOutlined />}
          onClick={() => {
            router.push("/dosen/soal");
          }}
        >
          Soal
        </Menu.Item>
        <Menu.Item
          key="paket-soal"
          icon={<DesktopOutlined />}
          onClick={() => {
            router.push("/dosen/paket-soal");
          }}
        >
          Paket Soal
        </Menu.Item>
        <Menu.Item
          key="nilai-mahasiswa"
          icon={<FileOutlined />}
          onClick={() => {
            router.push("/dosen/nilai-mahasiswa");
          }}
        >
          Nilai Mahasiswa
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderComponent;
