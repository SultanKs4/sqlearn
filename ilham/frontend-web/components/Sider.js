import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  CalendarOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  CodeSandboxOutlined,
  TeamOutlined,
  HomeOutlined,
  BarChartOutlined
} from "@ant-design/icons";

import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";

const { Sider } = Layout;

function SiderComponent({ role }) {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = statusCollapse => setCollapsed(statusCollapse);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      {role === "dosen" ? (
        <Menu
          theme="dark"
          defaultSelectedKeys={["jadwal"]}
          selectedKeys={router.pathname.split("/")[2]}
          mode="inline"
        >
          <Menu.Item
            key="jadwal"
            icon={<CalendarOutlined />}
            onClick={() => {
              router.push("/dosen/jadwal");
            }}
          >
            Jadwal
          </Menu.Item>
          <Menu.Item
            key="kelas"
            icon={<LaptopOutlined />}
            onClick={() => {
              router.push("/dosen/kelas");
            }}
          >
            Kelas
          </Menu.Item>
          <Menu.Item
            key="studi-kasus"
            icon={<DatabaseOutlined />}
            onClick={() => {
              router.push("/dosen/studi-kasus");
            }}
          >
            Studi Kasus
          </Menu.Item>
          <Menu.Item
            key="soal"
            icon={<FileTextOutlined />}
            onClick={() => {
              router.push("/dosen/soal");
            }}
          >
            Soal
          </Menu.Item>
          <Menu.Item
            key="paket-soal"
            icon={<CodeSandboxOutlined />}
            onClick={() => {
              router.push("/dosen/paket-soal");
            }}
          >
            Paket Soal
          </Menu.Item>
          <Menu.Item
            key="nilai-mahasiswa"
            icon={<TeamOutlined />}
            onClick={() => {
              router.push("/dosen/nilai-mahasiswa");
            }}
          >
            Nilai Mahasiswa
          </Menu.Item>
        </Menu>
      ) : (
        <Menu
          theme="dark"
          defaultSelectedKeys={["beranda"]}
          selectedKeys={router.pathname.split("/")[2]}
          mode="inline"
        >
          <Menu.Item
            key="beranda"
            icon={<HomeOutlined />}
            onClick={() => {
              router.push("/mahasiswa/beranda");
            }}
          >
            {" "}
            Beranda
          </Menu.Item>
          <Menu.Item
            key="soal"
            icon={<FileTextOutlined />}
            onClick={() => {
              router.push("/mahasiswa/soal");
            }}
          >
            {" "}
            Soal
          </Menu.Item>
          <Menu.Item
            key="lihat-nilai"
            icon={<BarChartOutlined />}
            onClick={() => {
              router.push("/mahasiswa/lihat-nilai");
            }}
          >
            {" "}
            Lihat Nilai
          </Menu.Item>
        </Menu>
      )}
    </Sider>
  );
}

export default SiderComponent;
