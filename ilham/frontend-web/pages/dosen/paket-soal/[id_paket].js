import Head from "next/head";

import {
  Skeleton,
  Typography,
  Row,
  Col,
  Button,
  Alert,
  Tooltip,
  message,
} from "antd";

import { LeftOutlined, PlusCircleOutlined } from "@ant-design/icons";

import PageLayout from "../../../components/PageLayout";
import ModalCustom from "../../../components/Modal";
import {
  addQuestionToPaketSoal,
  deleteQuestionFromPaketSoal,
  getPaketSoalByID,
} from "../../../utils/remote-data/dosen/PaketSoalCRUD";
import ListComponent from "../../../components/List";

import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import FormPilihSoal from "../../../components/dosen/Soal/FormPilihSoal";
import FormHapusSoal from "../../../components/dosen/Soal/FormHapusSoal";
import { useSession } from "next-auth/react";
import { removeHTML } from "../../../utils/common";

function PreviewPaket() {
  const { data: session } = useSession();
  const router = useRouter();

  const [dataPaket, setDataPaket] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [currentSoal, setCurrentSoal] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [modalRole, setModalRole] = useState("");
  const [modalText, setModalText] = useState("");

  const handleToggleModal = (state = isModalVisible) =>
    setIsModalVisible((prev) => state || !prev);

  useEffect(() => {
    fetchDataQuestionPaketSoal();
  }, [router.query.id_paket]);

  const fetchDataQuestionPaketSoal = useCallback(() => {
    if (session !== undefined)
      getPaketSoalByID(session?.user?.tokenJWT, router.query.id_paket).then(
        (res) => {
          setDataPaket(res.data);
          setIsDataLoaded(true);
        }
      );
  }, [session, router.query.id_paket]);

  const tambahSoal = () => {
    setModalRole("tambah");
    handleToggleModal();
  };

  const editPilihSoal = (soalObj) => {
    setModalRole("edit");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const deleteSoal = (soalObj) => {
    setModalRole("delete");
    setCurrentSoal(soalObj);
    handleToggleModal();
  };

  const aksiTambahSoal = (formPilihSoal) => {
    addQuestionToPaketSoal(
      session?.user?.tokenJWT,
      formPilihSoal,
      router?.query?.id_paket
    )
      .then(() => {
        handleToggleModal(false);
        message.success(`Data Pertanyaan berhasil ditambahkan`);
      })
      .then(() => fetchDataQuestionPaketSoal())
      .catch((err) => message.error(`Data Pertanyaan gagal ditambahkan`));
  };

  const aksiDeleteSoal = (pilihSoalObj) => {
    deleteQuestionFromPaketSoal(
      session?.user?.tokenJWT,
      router?.query?.id_paket,
      pilihSoalObj.id
    )
      .then(() => {
        handleToggleModal(false);
        message.success(
          `Data Pertanyaan berhasil dikeluarkan dari paket soal "${dataPaket?.description}"`
        );
      })
      .then(() => fetchDataQuestionPaketSoal())
      .catch((err) =>
        message.log(
          `Data Pertanyaan ${removeHTML(
            dataPaket.description
          )} gagal dikeluarkan`
        )
      );
  };
  return (
    <>
      <Head>
        <title>SQLearn | Dosen - Paket Paket</title>
      </Head>
      <PageLayout role="dosen">
        <Row justify="space-between">
          <Col>
            <Row gutter={30}>
              <Col>
                <Tooltip title="Kembali" placement="bottom">
                  <Button
                    onClick={() => router.push("/dosen/paket-soal")}
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
                {isDataLoaded ? (
                  <Typography.Title level={2}>
                    {dataPaket?.description}
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
          <Col>
            <Button type="primary" onClick={tambahSoal}>
              Tambah Soal <PlusCircleOutlined />
            </Button>
          </Col>
        </Row>

        <ModalCustom
          role={modalRole}
          entity={`Soal untuk ${dataPaket?.description}`}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          setModalText={setModalText}
          modalContent={
            modalRole === "tambah" ? (
              <FormPilihSoal
                handleSubmit={aksiTambahSoal}
                setVisible={setIsModalVisible}
                studiKasus={dataPaket?.CaseStudy}
                dataPaket={dataPaket}
              />
            ) : (
              <FormHapusSoal
                handleSubmit={aksiDeleteSoal}
                setVisible={setIsModalVisible}
                currentSoal={currentSoal}
              />
            )
          }
        />
        {/* Content asli */}
        <ListComponent
          isLoading={!isDataLoaded}
          dataSource={dataPaket?.questions || []}
          role={"soal-tiap-paket-dosen"}
          editPilihSoal={editPilihSoal}
          deleteSoal={deleteSoal}
        />
      </PageLayout>
    </>
  );
}

export default PreviewPaket;
