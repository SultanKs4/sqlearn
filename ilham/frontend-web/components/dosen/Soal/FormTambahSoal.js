import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  Tag,
  Upload,
} from "antd";
import {
  ConsoleSqlOutlined,
  InboxOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "antd/lib/form/Form";
import {
  getStudiKasus,
  getStudiKasusByID,
} from "../../../utils/remote-data/dosen/StudiKasus";
import { useSession } from "next-auth/react";
import { propsUploadImage } from "../../../utils/remote-data/dosen/SoalCRUD";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 0 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

// BE perlu nambah key "hint" dan "jawaban_benar" untuk endpoint Create Soal (sudah)

function FormTambahSoal({ currentSoal, setVisible, handleSubmit, ...props }) {
  const { data: session } = useSession();

  const [form] = useForm();

  const [fileList, setFileList] = useState([]);

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [dataTabel, setDataTabel] = useState([]);

  const [selectedKategori, setSelectedKategori] = useState(1);
  const [selectedStudiKasus, setSelectedStudiKasus] = useState("");

  // ? State ini dipakai jika kategori nya adalah close-ended
  const refButton = useRef(null);
  const refButtonPetunjuk = useRef(null);

  const [tagsKomponen, setTagsKomponen] = useState([]);
  const [tagsPetunjuk, setTagsPetunjuk] = useState([]);

  const [inputTagsKomponenValue, setInputTagsKomponenValue] = useState("");
  const [inputTagsKomponenVisible, setInputTagsKomponenVisible] =
    useState(false);

  const [inputTagsPetunjukValue, setInputTagsPetunjukValue] = useState("");
  const [inputTagsPetunjukVisible, setInputTagsPetunjukVisible] =
    useState(false);

  const onChangeKategori = (kategori) => setSelectedKategori(kategori);

  const onChangeStudiKasus = (studiKasusID) =>
    setSelectedStudiKasus(studiKasusID);

  const fetchDataStudiKasus = useCallback(() => {
    if (session !== undefined)
      getStudiKasus(session?.user?.tokenJWT).then((response) =>
        setDataStudiKasus(response.data)
      );
  }, [session]);

  const handleCancel = () => setVisible(false);

  const normFile = (e) => {
    if (
      !e.file.type === "image/jpeg" ||
      !e.file.type === "image/png" ||
      !e.file.type === "image/jpg"
    )
      message.error(`${e.file.name} is not an image`);
  };

  const onFinish = (values) => {
    if (fileList.length === 0)
      message.error("Mohon memasukkan gambar preview hasil");
    else
      handleSubmit({
        ...values,
        label_id: selectedKategori === "Close-Ended" ? 2 : 1,
        sql_parts: JSON.stringify(values?.sql_parts || []),
        sql_hints: JSON.stringify(values?.sql_hints || []),
        case_study: values?.case_study?.value,
        answer: JSON.stringify(
          selectedKategori === "Close-Ended" ? [values?.answer] : values?.answer
        ),
        tables: values.tables.toString(),
        answer_pic: fileList,
      });
  };

  useEffect(() => {
    if (selectedStudiKasus !== "")
      getStudiKasusByID(session?.user?.tokenJWT, selectedStudiKasus?.value)
        .then((res) => setDataTabel(res.data?.tables))
        .catch((err) => {
          setDataTabel({});
          message.error("Data Tabel tidak dapat dimuat");
        });
  }, [selectedStudiKasus]);

  useEffect(() => {
    form.setFieldsValue({
      ...form,
      sql_parts: tagsKomponen,
      sql_hints: tagsPetunjuk,
    });
  }, [tagsKomponen, tagsPetunjuk]);

  const showInput = () => setInputTagsKomponenVisible(true);
  const showInputPetunjuk = () => setInputTagsPetunjukVisible(true);

  useEffect(() => {
    refButton?.current?.input.focus();
  }, [inputTagsKomponenVisible]);

  useEffect(() => {
    refButtonPetunjuk?.current?.input.focus();
  }, [inputTagsPetunjukVisible]);

  useEffect(() => {
    fetchDataStudiKasus();
    form.setFieldsValue({
      dosen_pembuat: session?.user?.name,
    });
  }, [session]);

  const handleInputChange = (e) => setInputTagsKomponenValue(e.target.value);
  const handleInputPetunjukChange = (e) =>
    setInputTagsPetunjukValue(e.target.value);

  const onRemoveTagsKomponen = (removedTag) =>
    setTagsKomponen((prevTagsKomponen) =>
      prevTagsKomponen.filter((item) => item !== removedTag)
    );

  const onAddTagsKomponen = () => {
    setTagsKomponen((prevTagsKomponen) => [
      ...prevTagsKomponen,
      inputTagsKomponenValue,
    ]);
    setInputTagsKomponenVisible(false);
    setInputTagsKomponenValue("");
  };

  const onRemoveTagsPetunjuk = (removedTag) =>
    setTagsPetunjuk((prevTagsPetunjuk) =>
      prevTagsPetunjuk.filter((item) => item !== removedTag)
    );

  const onAddTagsPetunjuk = () => {
    setTagsPetunjuk((prevTagsPetunjuk) => [
      ...prevTagsPetunjuk,
      inputTagsPetunjukValue,
    ]);
    setInputTagsPetunjukVisible(false);
    setInputTagsPetunjukValue("");
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="text"
        label="Teks Soal"
        rules={[
          {
            required: true,
            message: "Mohon masukkan pertanyaan !",
          },
        ]}
      >
        <Input
          autoComplete="off"
          prefix={<ConsoleSqlOutlined />}
          placeholder={` Teks Pertanyaan . . .`}
        />
      </Form.Item>
      <Form.Item
        name="label_id"
        label="Kategori"
        rules={[
          {
            required: true,
            message: "Mohon masukkan nama Kategori!",
          },
        ]}
      >
        <Select placeholder="Pilih Kategori . . ." onChange={onChangeKategori}>
          <Select.Option key={"Close-Ended"}>Close-Ended</Select.Option>
          <Select.Option key={"Open-Ended"}>Open-Ended</Select.Option>
        </Select>
      </Form.Item>
      {selectedKategori === "Open-Ended" ? (
        <>
          <Form.List
            name="answer"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(
                      new Error("Masukkan paling sedikit 1 jawaban")
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "Opsi Jawaban" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Masukkan Kunci SQL Query atau hapus field ini",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        autoComplete="off"
                        placeholder="Kunci SQL Query . . ."
                        style={{ width: "88%" }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        style={{ marginLeft: ".5em" }}
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "100%" }}
                    icon={<PlusOutlined />}
                  >
                    Tambah Opsi Jawaban
                  </Button>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </>
      ) : (
        // ? Close-Ended
        <>
          <Form.Item name="sql_parts" label="Komponen SQL">
            {tagsKomponen.map((item, idx) => (
              <Tag
                key={idx}
                closable
                onClose={() => onRemoveTagsKomponen(item)}
              >
                {item}
              </Tag>
            ))}
            {inputTagsKomponenVisible && (
              <Input
                autoComplete="off"
                ref={refButton}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputTagsKomponenValue}
                onChange={handleInputChange}
                onBlur={onAddTagsKomponen}
                onPressEnter={onAddTagsKomponen}
              />
            )}
            {!inputTagsKomponenVisible && (
              <Button size="small" type="dashed" onClick={showInput}>
                + Tambah komponen SQL
              </Button>
            )}
          </Form.Item>
          <Form.Item name="sql_hints" label="Petunjuk Jawaban">
            {tagsPetunjuk.map((item, idx) => (
              <Tag
                key={idx}
                closable
                onClose={() => onRemoveTagsPetunjuk(item)}
              >
                {item}
              </Tag>
            ))}
            {inputTagsPetunjukVisible && (
              <Input
                autoComplete="off"
                ref={refButtonPetunjuk}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputTagsPetunjukValue}
                onChange={handleInputPetunjukChange}
                onBlur={onAddTagsPetunjuk}
                onPressEnter={onAddTagsPetunjuk}
              />
            )}
            {!inputTagsPetunjukVisible && (
              <Button size="small" type="dashed" onClick={showInputPetunjuk}>
                + Tambah komponen petunjuk SQL
              </Button>
            )}
          </Form.Item>

          <Form.Item
            name="answer"
            label="Jawaban Benar"
            rules={[
              {
                required: true,
                message: "Mohon masukkan jawaban yang benar!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              prefix={<ConsoleSqlOutlined />}
              placeholder={` Jawaban Benar . . .`}
            />
          </Form.Item>
        </>
      )}

      <Form.Item label="Preview Hasil">
        <Form.Item
          name="answer_pic"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            {...propsUploadImage(session?.user?.tokenJWT, setFileList)}
            multiple={false}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">Hanya bisa upload gambar </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Row justify="space-between" gutter={8}>
        <Col span={12}>
          <Form.Item
            name="case_study"
            label="Studi Kasus"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Studi Kasus!",
              },
            ]}
          >
            <Select
              labelInValue
              onChange={onChangeStudiKasus}
              placeholder="Pilih Studi Kasus . . ."
            >
              {dataStudiKasus?.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="tables"
            label={`Gunakan Tabel dari ${selectedStudiKasus?.label || ""}`}
            rules={[
              {
                required: true,
                message: "Mohon pilih tabel yang akan digunakan!",
              },
            ]}
          >
            <Select placeholder="Pilih tabel . . ." mode="multiple" allowClear>
              {Object.keys(dataTabel) !== 0 &&
                Object.keys(dataTabel)?.map((item, id) => (
                  <Select.Option key={id || 0} value={item || ""}>
                    {" "}
                    {item || ""}{" "}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

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

export default FormTambahSoal;
