import { Button, Col, Divider, Form, Row, Select, Table } from "antd";
import { useEffect, useState } from "react";
import {
  getStudiKasus,
  getStudiKasusByID,
} from "../../../utils/remote-data/dosen/StudiKasus";
import { removeHTML } from "../../../utils/common";
import { getSoalByCaseStudyByCategory } from "../../../utils/remote-data/dosen/SoalCRUD";
import { useSession } from "next-auth/react";

// ! (Bug BE) : Untuk Studi Kasus, yang bisa hanya id : 2

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

function FormPilihSoal({ setVisible, handleSubmit, dataPaket, ...props }) {
  const { data: session } = useSession();

  const [form] = Form.useForm();
  const { Option } = Select;

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [selectedIDStudiKasus, setSelectedIDStudiKasus] = useState(0);
  const [selectedNameStudiKasus, setSelectedNameStudiKasus] = useState("");
  const [dataSoalByStudiKasus, setDataSoalByStudiKasus] = useState([]);

  // ? Untuk ngeformat sesuai columns dan dataIndex
  const [dataTable, setDataTable] = useState([]);

  const onChangeStudiKasus = (studiKasusObj) => {
    getStudiKasusByID(session?.user?.tokenJWT, studiKasusObj)
      .then((res) => setSelectedNameStudiKasus(res?.data?.name))
      .catch((e) => {
        console.log(e);
        setSelectedNameStudiKasus("");
      });
    setSelectedIDStudiKasus(studiKasusObj);
  };

  const rowSelection = {
    onSelect: (record, selected, selectedRows, nativeEvent) => {
      console.log("selectedRows", selectedRows);
      form.setFieldsValue({
        questions: [selectedRows[0]?.idSoal],
      });
    },
  };

  useEffect(() => {
    getStudiKasus(session?.user?.tokenJWT)
      .then((response) => setDataStudiKasus(response.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getSoalByCaseStudyByCategory(
      session?.user?.tokenJWT,
      selectedIDStudiKasus,
      dataPaket?.label_id
    )
      .then((res) => {
        let tempSoalFiltered = res.data.map((item) => {
          return {
            key: item.id,
            ...item,
          };
        });
        setDataSoalByStudiKasus(tempSoalFiltered);
      })
      .catch((e) => {
        console.log(e);
        setDataSoalByStudiKasus([]);
      });
  }, [selectedIDStudiKasus]);

  useEffect(() => {
    let tempData = [];

    dataSoalByStudiKasus?.map((item) =>
      tempData.push({
        key: item.id,
        idSoal: item.id,
        kategori: item.QuestionLabel?.name,
        studi_kasus: item.CaseStudy?.name,
        teksSoal: removeHTML(item.text),
      })
    );

    setDataTable(tempData);
  }, [dataSoalByStudiKasus]);

  const onFinish = (values) => {
    // ? Hanya kirim ke Backend berupa array of questions saja
    handleSubmit({ questions: values.questions });
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
        >
          {dataStudiKasus?.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <>
        {`Ini list pertanyaan yang ada untuk ${
          selectedNameStudiKasus || "Loading . . ."
        }`}

        <Form.Item name="questions" hidden></Form.Item>

        <Table
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataTable}
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
