import {
  Button,
  Col,
  DatePicker,
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
  DatabaseOutlined,
  PlusOutlined,
  InboxOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";
import { formatToArray, removeHTML } from "../../../utils/common";

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

function FormEditSoal({ currentSoal, setVisible, handleSubmit, ...props }) {
  const [form] = useForm();

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [selectedStudiKasus, setSelectedStudiKasus] = useState("");
  const [selectedKategori, setSelectedKategori] = useState(
    currentSoal?.QuestionLabel?.name
  );

  const [isEditingForm, setIsEditingForm] = useState(false);

  const refButton = useRef(null);
  const refButtonPetunjuk = useRef(null);

  const [tagsKomponen, setTagsKomponen] = useState(
    currentSoal?.kategori === "Close-Ended"
      ? currentSoal?.jawaban[0]?.split(" ")
      : []
  );
  const [tagsPetunjuk, setTagsPetunjuk] = useState([]);

  const [inputTagsKomponenValue, setInputTagsKomponenValue] = useState("");
  const [inputTagsKomponenVisible, setInputTagsKomponenVisible] =
    useState(false);

  const [inputTagsPetunjukValue, setInputTagsPetunjukValue] = useState("");
  const [inputTagsPetunjukVisible, setInputTagsPetunjukVisible] =
    useState(false);

  const normFile = (e) => console.log("Upload event:", e);

  const validateImageFile = (file) => {
    if (!file.type.includes("image")) {
      console.log("bukan gambar", file);
      message.error(`${file.name} is not an image`);
    }
    return file.type.includes("image") ? true : Upload.LIST_IGNORE;
  };

  const onFinish = ({ kategori, ...values }) => {
    handleSubmit({
      kategori: selectedKategori === "Close-Ended" ? 2 : 1,
      ...values,
    });
  };

  const onChangeStudiKasus = (kelas) => {
    setIsEditingForm(true);
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const onChangeKategori = (kategori) => {
    setIsEditingForm(true);
    console.log(kategori);
    setSelectedKategori(kategori);
  };

  useEffect(() => {
    mockGetAllStudiKasus().then((response) => setDataStudiKasus(response.data));
    return () => {
      setDataStudiKasus({}); // This worked for me
    };
  }, []);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  // ? Ini untuk menyesuaikan data form dengan remote data dari BE
  useEffect(() => {
    console.log(form.getFieldsValue());
    form.setFieldsValue({
      ...form,
      opsi_jawaban:
        selectedKategori === "Close-Ended"
          ? tagsKomponen
          : form.getFieldValue("opsi_jawaban"),
      kategori: selectedKategori,
    });
  }, [tagsKomponen, selectedKategori]);

  // ? Ini untuk menyesuaikan data form dengan user input
  useEffect(() => {
    form.setFieldsValue({
      ...form,
      opsi_jawaban: tagsKomponen,
      petunjuk_jawaban: tagsPetunjuk,
    });
  }, [tagsKomponen, tagsPetunjuk]);

  useEffect(() => {
    console.log("ini currentSoal", currentSoal);
    if (currentSoal !== undefined)
      form.setFieldsValue({
        kategori: selectedKategori,
        teksSoal: removeHTML(currentSoal?.text),
        // ? Sementara seperti ini
        opsi_jawaban: formatToArray(currentSoal?.answer),
        jawaban_benar: formatToArray(currentSoal?.answer)[0],
        dosen_pembuat: currentSoal?.User?.name,
        studi_kasus: currentSoal?.CaseStudy?.name,
      });
  }, [currentSoal]);

  const showInput = () => setInputTagsKomponenVisible(true);
  const showInputPetunjuk = () => setInputTagsPetunjukVisible(true);

  useEffect(() => {
    refButton?.current?.input.focus();
  }, [inputTagsKomponenVisible]);

  useEffect(() => {
    refButtonPetunjuk?.current?.input.focus();
  }, [inputTagsPetunjukVisible]);

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
      <Row justify="space-between" gutter={8}>
        <Col span={24}>
          <Form.Item
            name="kategori"
            label="Kategori"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Kategori!",
              },
            ]}
          >
            <Select
              placeholder="Pilih Kategori . . ."
              onChange={onChangeKategori}
            >
              <Select.Option key={"Close-Ended"}>Close-Ended</Select.Option>
              <Select.Option key={"Open-Ended"}>Open-Ended</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="teksSoal"
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
      {selectedKategori === "-" ? (
        " "
      ) : selectedKategori === "Open-Ended" ? (
        <Form.List
          name="opsi_jawaban"
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
      ) : (
        <>
          <Form.Item name="opsi_jawaban" label="Opsi Jawaban">
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
          <Form.Item name="petunjuk_jawaban" label="Petunjuk Jawaban">
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
            name="jawaban_benar"
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
          name="preview_hasil"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            multiple={false}
            beforeUpload={(file) => validateImageFile(file)}
            name="files"
            action="/upload.do"
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
            name="dosen_pembuat"
            label="Dibuat oleh"
            rules={[
              {
                required: true,
                message: "Mohon masukkan dosen pembuat!",
              },
            ]}
          >
            <Input
              autoComplete="off"
              disabled
              prefix={<ConsoleSqlOutlined />}
              placeholder={` Dibuat Oleh . . .`}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="studi_kasus"
            label="Studi Kasus"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Studi Kasus!",
              },
            ]}
          >
            <Select
              placeholder="Pilih Studi Kasus . . ."
              onChange={onChangeStudiKasus}
            >
              {dataStudiKasus?.map((item) => (
                <Select.Option key={item.nama}>{item.nama}</Select.Option>
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

export default FormEditSoal;
