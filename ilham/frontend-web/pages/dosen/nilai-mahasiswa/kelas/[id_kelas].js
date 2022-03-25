import Head from "next/head";

import { Skeleton, Typography, Row, Col, Button, Alert, Tooltip } from "antd";

import { LeftOutlined } from "@ant-design/icons";

import PageLayout from "../../../../components/PageLayout";
import ListComponent from "../../../../components/List";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  mockGetNilaiTiapKelas,
  mockKelasDiajar,
} from "../../../../utils/remote-data/dosen/NilaiMahasiswaCRUD";
import ModalCustom from "../../../../components/Modal";
import PreviewLogMahasiswa from "../../../../components/dosen/NilaiMhs/PreviewLogMahasiswa";

function PreviewNilaiTiapKelas() {
  const router = useRouter();

  const [selectedMhs, setSelectedMhs] = useState({});

  const [dataNilaiMhs, setDataNilaiMhs] = useState({});
  const [isDataMhsLoaded, setIsDataMhsLoaded] = useState(false);

  const [dataKelas, setDataKelas] = useState({});
  const [isDataKelasLoaded, setIsDataKelasLoaded] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  const previewNilaiMhs = (nilaiMhsObj) => {
    setSelectedMhs(nilaiMhsObj);
    setModalRole("preview");
    handleToggleModal();
  };

  useEffect(() => {
    console.log("ini router", router?.query);
    mockKelasDiajar().then((response) => {
      setDataKelas(
        response?.data?.find(
          (item) => parseInt(item.id) === parseInt(router?.query?.id_kelas)
        )
      );
      setIsDataKelasLoaded(true);
    });
    mockGetNilaiTiapKelas().then((response) => {
      setDataNilaiMhs(response?.data);
      setIsDataMhsLoaded(true);
    });
  }, [router.query.id_kelas]);

  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Detail Nilai Kelas </title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Row gutter={30}>
              <Col>
                <Tooltip title="Kembali" placement="bottom">
                  <Button
                    onClick={() => router.push("/dosen/nilai-mahasiswa")}
                    style={{
                      marginTop: ".2em",
                      backgroundColor: "#231e8f",
                      color: "white",
                    }}
                    icon={<LeftOutlined />}
                  />
                </Tooltip>
              </Col>
              <Col>
                {isDataKelasLoaded ? (
                  <Typography.Title level={2}>
                    {dataKelas?.nama}
                  </Typography.Title>
                ) : (
                  <Skeleton
                    active
                    paragraph={false}
                    title={{ width: "20vw" }}
                    style={{ marginBottom: "1em" }}
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>

        <ModalCustom
          role={modalRole}
          entity="Log Mahasiswa"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          confirmLoading={isModalLoading}
          setConfirmLoading={setIsModalLoading}
          // modalText={modalText}
          modalContent={<PreviewLogMahasiswa currentNilaiMhs={selectedMhs} />}
          setModalText={setModalText}
        />

        {/* Content asli */}
        <ListComponent
          displayAllData
          role={"lihat-nilai"}
          isLoading={!isDataMhsLoaded}
          dataSource={dataNilaiMhs}
          previewDetailNilai={previewNilaiMhs}
        />
      </PageLayout>
    </>
  );
}

export default PreviewNilaiTiapKelas;
