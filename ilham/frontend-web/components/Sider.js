import { Layout, Menu } from "antd";
import {
  CalendarOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  CodeSandboxOutlined,
  TeamOutlined,
  FormOutlined,
  HomeOutlined,
  BarChartOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

import { React } from "react";
import { useRouter } from "next/router";

import styles from "../styles/components/Sider.module.css";

const { Sider } = Layout;

function SiderComponent({ role, collapsed, setCollapsed }) {
  const router = useRouter();

  const onCollapse = (statusCollapse) => setCollapsed(statusCollapse);
  let siderElement;
  switch (role) {
    case "dosen":
      siderElement = (
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
            key="paket-soal"
            icon={<CodeSandboxOutlined />}
            onClick={() => {
              router.push("/dosen/paket-soal");
            }}
          >
            Paket Soal
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
            key="nilai-mahasiswa"
            icon={<TeamOutlined />}
            onClick={() => {
              router.push("/dosen/nilai-mahasiswa");
            }}
          >
            Nilai Mahasiswa
          </Menu.Item>
        </Menu>
      );
      break;
    case "mahasiswa":
      siderElement = (
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
      );
      break;
    case "admin":
      siderElement = (
        <Menu
          theme="dark"
          defaultSelectedKeys={["daftar-dosen"]}
          selectedKeys={router.pathname.split("/")[2]}
          mode="inline"
        >
          <Menu.Item
            key="daftar-dosen"
            icon={<TeamOutlined />}
            onClick={() => {
              router.push("/admin/daftar-dosen");
            }}
          >
            Daftar Dosen
          </Menu.Item>
          <Menu.Item
            key="konfigurasi-penilaian"
            icon={<ContainerOutlined />}
            onClick={() => {
              router.push("/admin/konfigurasi-penilaian");
            }}
          >
            {" "}
            Konfigurasi Penilaian
          </Menu.Item>
          <Menu.Item
            key="edit-profile"
            icon={<FormOutlined />}
            onClick={() => {
              router.push("/admin/edit-profile");
            }}
          >
            {" "}
            Ubah Profile
          </Menu.Item>
        </Menu>
      );
      break;

    default:
      break;
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={styles.sticky_sider}
      style={{
        zIndex: collapsed ? 1 : 2,
      }}
    >
      <div className="logo" />
      {siderElement}
    </Sider>
  );
}

export default SiderComponent;
