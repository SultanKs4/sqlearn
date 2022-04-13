import { React, useState } from "react";

import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  Typography,
} from "antd";
import ListComponent from "../../components/List";
import ModalCustom from "../Modal";
import FormDeleteGradingRules from "./GradingRules/FormDeleteGradingRules";
import FormEditGradingRules from "./GradingRules/FormEditGradingRules";
import {
  deleteGradingRules,
  postGradingRules,
  updateGradingRules,
} from "../../utils/remote-data/admin/GradingRules";
import { useSession } from "next-auth/react";

function PanelGradingRules({
  onFinish,
  dataGradingRules,
  isGradingRulesLoaded,
  fetchDataGradingRules,
  ...props
}) {
  const { data: session } = useSession();
  const [form] = Form.useForm();

  const [selectedRules, setSelectedRules] = useState({});

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalRole, setModalRole] = useState("");

  const handleToggleModal = () => setIsModalVisible((prev) => !prev);

  const onSubmit = (values) => {
    onFinish(values);
    form.resetFields();
  };

  const displayEditGradingRules = (rulesObj) => {
    setModalRole("edit");
    handleToggleModal();
    setSelectedRules(rulesObj);
  };

  const displayDeleteGradingRules = (rulesObj) => {
    setModalRole("hapus");
    handleToggleModal();
    setSelectedRules(rulesObj);
  };

  const aksiEditGradingRules = (values) => {
    console.log(values, "ini values");
    updateGradingRules(session.user.tokenJWT, values, selectedRules?.id)
      .then(() => {
        handleToggleModal();
        fetchDataGradingRules();
        message.success("Grading rules berhasil diubah");
      })
      .catch(() => message.error("Grading rules gagal diubah"));
  };

  const aksiDeleteGradingRules = (values) => {
    deleteGradingRules(session?.user?.tokenJWT, values.id)
      .then(() => {
        handleToggleModal();
        fetchDataGradingRules();
        message.success("Grading rules berhasil dihapus");
      })
      .catch(() => message.error("Grading rules gagal dihapus"));
  };

  return (
    <>
      <Alert
        showIcon
        type="info"
        description="Additional description and information about copywriting."
        style={{ marginBottom: "1em" }}
      />
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Row gutter={20} align="middle">
          <Col>
            <Form.Item
              name="type"
              label="Pilih Tipe"
              rules={[
                {
                  required: true,
                  message: "Mohon pilih tipe",
                },
              ]}
            >
              <Select
                style={{ width: "200px" }}
                placeholder={`Ujian / Latihan . . .`}
              >
                <Select.Option key="ujian"> Ujian </Select.Option>
                <Select.Option key="latihan"> Latihan </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="attemps"
              label="Jumlah percobaan"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan jumlah percobaan",
                },
              ]}
            >
              <Input type={"number"} placeholder={` Jumlah percobaan . . .`} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="value"
              label="Score maksimal"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan maksimal nilai score yang didapat",
                },
              ]}
            >
              <Input type={"number"} placeholder={` Score maksimal . . .`} />
            </Form.Item>
          </Col>
          <Col>
            <Button key="submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <Divider />
      <Typography.Title level={4} style={{ marginBottom: "1em" }}>
        Daftar Grading Rules
      </Typography.Title>
      <ListComponent
        role={"grading-rules"}
        dataSource={dataGradingRules}
        isLoading={!isGradingRulesLoaded}
        displayEditGradingRules={displayEditGradingRules}
        displayDeleteGradingRules={displayDeleteGradingRules}
      />

      {isModalVisible && (
        <ModalCustom
          role={modalRole}
          entity="Grading Rules"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          modalContent={
            modalRole === "edit" ? (
              <FormEditGradingRules
                handleSubmit={aksiEditGradingRules}
                setVisible={setIsModalVisible}
                currentRules={selectedRules}
              />
            ) : (
              <FormDeleteGradingRules
                handleSubmit={aksiDeleteGradingRules}
                setVisible={setIsModalVisible}
                currentRules={selectedRules}
              />
            )
          }
        />
      )}
    </>
  );
}

export default PanelGradingRules;
