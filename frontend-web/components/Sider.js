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
  ContainerOutlined,
} from "@ant-design/icons";

import { React } from "react";
import { useRouter } from "next/router";

import styles from "../styles/components/Sider.module.css";

const { Sider } = Layout;

function SiderComponent({ role, collapsed, setCollapsed }) {
  const router = useRouter();

  const navItemListAdmin = [
    {
      key: "daftar-dosen",
      icon: <TeamOutlined />,
      onClick: () => router.push("/admin"),
      label: "Daftar Dosen",
    },
    {
      key: "konfigurasi-penilaian",
      icon: <ContainerOutlined />,
      onClick: () => router.push("/admin/konfigurasi-penilaian"),
      label: "Konfigurasi Penilaian",
    },
    {
      key: "edit-profile",
      icon: <FormOutlined />,
      onClick: () => router.push("/admin/edit-profile"),
      label: "Edit Profile",
    },
  ];

  const navItemListDosen = [
    {
      key: "jadwal",
      icon: <CalendarOutlined />,
      onClick: () => router.push("/dosen"),
      label: "Jadwal",
    },
    {
      key: "kelas",
      icon: <LaptopOutlined />,
      onClick: () => router.push("/dosen/kelas"),
      label: "Kelas",
    },
    {
      key: "studi-kasus",
      icon: <DatabaseOutlined />,
      onClick: () => router.push("/dosen/studi-kasus"),
      label: "Studi Kasus",
    },
    {
      key: "paket-soal",
      icon: <CodeSandboxOutlined />,
      onClick: () => router.push("/dosen/paket-soal"),
      label: "Paket Soal",
    },
    {
      key: "soal",
      icon: <FileTextOutlined />,
      onClick: () => router.push("/dosen/soal"),
      label: "Soal",
    },
    {
      key: "nilai-mahasiswa",
      icon: <TeamOutlined />,
      onClick: () => router.push("/dosen/nilai-mahasiswa"),
      label: "Nilai Mahasiswa",
    },
    {
      key: "edit-profile",
      icon: <FormOutlined />,
      onClick: () => router.push("/dosen/edit-profile"),
      label: "Ubah Profile",
    },
  ];

  const navItemListMhs = [
    {
      key: "beranda",
      icon: <HomeOutlined />,
      onClick: () => router.push("/mahasiswa"),
      label: "Beranda",
    },
    {
      key: "edit-profile",
      icon: <FormOutlined />,
      onClick: () => router.push("/mahasiswa/edit-profile"),
      label: "Edit Profile",
    },
  ];

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
          items={navItemListDosen}
        />
      );
      break;
    case "mahasiswa":
      siderElement = (
        <Menu
          theme="dark"
          defaultSelectedKeys={["beranda"]}
          selectedKeys={router.pathname.split("/")[2]}
          mode="inline"
          items={navItemListMhs}
        />
      );
      break;
    case "admin":
      siderElement = (
        <Menu
          theme="dark"
          defaultSelectedKeys={["daftar-dosen"]}
          selectedKeys={router.pathname.split("/")[2]}
          mode="inline"
          items={navItemListAdmin}
        />
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
