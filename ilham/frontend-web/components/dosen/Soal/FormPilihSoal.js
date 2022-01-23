import { Button, Col, Divider, Form, Row, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";
import { isObjectEmpty } from "../../../utils/common";
import { getSoal } from "../../../utils/remote-data/dosen/SoalCRUD";

const columns = [
  {
    title: "id",
    dataIndex: "idSoal",
  },
  {
    title: "Kategori",
    dataIndex: "kategori",
  },
  {
    title: "Studi Kasus",
    dataIndex: "studi_kasus",
  },
  {
    title: "Pertanyaan",
    dataIndex: "teksSoal",
  },
];

function FormPilihSoal({
  setFormObj,
  setVisible,
  handleSubmit,
  studiKasus,
  ...props
}) {
  const [form] = Form.useForm();
  // TODO : Mengerjakan list pertanyaan yang ada untuk setiap studi kasus yang dipilih
  const { Option } = Select;

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [selectedStudiKasus, setSelectedStudiKasus] = useState(studiKasus);
  const [dataSoalByStudiKasus, setDataSoalByStudiKasus] = useState([]);

  const onChangeStudiKasus = (kelas) => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const rowSelection = {
    onChange: (_, selectedRows) => {
      form.setFieldsValue({
        soal: selectedRows[0],
      });
    },
  };

  useEffect(() => {
    mockGetAllStudiKasus().then((response) => setDataStudiKasus(response.data));
    form.setFieldsValue({
      studi_kasus_nama: studiKasus,
    });

    getSoal().then((response) => {
      let tempSoalFiltered = response.data.filter(
        (item) => item.studi_kasus === selectedStudiKasus
      );
      tempSoalFiltered = tempSoalFiltered.map((item) => {
        return {
          key: item.idSoal,
          ...item,
        };
      });
      setDataSoalByStudiKasus(tempSoalFiltered);
    });
  }, []);

  const onFinish = (values) => {
    setFormObj(values);
    handleSubmit(values);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="studi_kasus_nama"
        label="Studi Kasus"
        tooltip={{
          title: `Soal ini menggunakan  ${
            isObjectEmpty(selectedStudiKasus)
              ? " yang dipilih "
              : selectedStudiKasus
          }`,
        }}
        rules={[
          {
            required: true,
            message: "Mohon pilih Studi Kasus!",
          },
        ]}
      >
        <Select
          placeholder="Pilih Studi Kasus . . ."
          onChange={onChangeStudiKasus}
          style={{ width: "200px" }}
          disabled
        >
          {dataStudiKasus?.map((item) => (
            <Option key={item.nama}>{item.nama}</Option>
          ))}
        </Select>
      </Form.Item>
      <>
        {`Ini list pertanyaan yang ada untuk ${selectedStudiKasus}`}
        <Table
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataSoalByStudiKasus}
        />
      </>
      <Divider />
      <Row justify="end" gutter={10} style={{ padding: 0, margin: 0 }}>
        <Col>
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        </Col>
        <Col>
          <Button key="submit" type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormPilihSoal;
