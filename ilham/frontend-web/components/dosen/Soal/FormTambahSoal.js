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
  InboxOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "antd/lib/form/Form";
import { mockGetAllStudiKasus } from "../../../utils/remote-data/dosen/StudiKasus";

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

function FormEditSoal({
  currentSoal,
  setFormObj,
  setVisible,
  handleSubmit,
  ...props
}) {
  const [form] = useForm();

  const [dataStudiKasus, setDataStudiKasus] = useState([]);
  const [selectedStudiKasus, setSelectedStudiKasus] = useState("");
  const [selectedKategori, setSelectedKategori] = useState(1);

  // ? State ini dipakai jika kategori nya adalah close-ended
  const refButton = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [tags, setTags] = useState([]);

  const onChangeStudiKasus = (kelas) => {
    console.log(kelas);
    setSelectedStudiKasus(kelas);
  };

  const onChangeKategori = (kategori) => {
    console.log(kategori);
    setSelectedKategori(kategori);
  };

  useEffect(() => {
    mockGetAllStudiKasus().then((response) => setDataStudiKasus(response.data));
    form.setFieldsValue({
      dosen_pembuat: "Dosen Coba",
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

  const normFile = (e) => console.log("Upload event:", e);

  useEffect(() => {
    form.setFieldsValue({
      ...form,
      opsi_jawaban: tags,
    });
  }, [tags]);

  const validateImageFile = (file) => {
    if (!file.type.includes("image")) {
      console.log("bukan gambar", file);
      message.error(`${file.name} is not an image`);
    }
    return file.type.includes("image") ? true : Upload.LIST_IGNORE;
  };

  const showInput = () => {
    setInputVisible(true);
  };

  useEffect(() => {
    refButton?.current?.input.focus();
  }, [inputVisible]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const onRemoveTags = (removedTag) =>
    setTags((prevTags) => prevTags.filter((item) => item !== removedTag));

  const onAddTags = () => {
    setTags((prevTags) => [...prevTags, inputValue]);
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row justify="space-between" gutter={8}>
        <Col span={12}>
          <Form.Item
            name="nama_soal"
            label="Nama Soal"
            rules={[
              {
                required: true,
                message: "Mohon masukkan nama Nama!",
              },
            ]}
          >
            <Input
              prefix={<ConsoleSqlOutlined />}
              placeholder={` Nama Soal . . .`}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="kategori" label="Kategori">
            <Select
              placeholder="Pilih Kategori . . ."
              onChange={onChangeKategori}
            >
              <Select.Option key={1}>Close-Ended</Select.Option>
              <Select.Option key={2}>Open-Ended</Select.Option>
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
          prefix={<ConsoleSqlOutlined />}
          placeholder={` Teks Pertanyaan . . .`}
        />
      </Form.Item>
      {selectedKategori === 2 ? (
        <>
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
        <Form.Item name="opsi_jawaban" label="Opsi Jawaban">
          {tags.map((item, idx) => (
            <Tag key={idx} closable onClose={() => onRemoveTags(item)}>
              {item}
            </Tag>
          ))}
          {inputVisible && (
            <Input
              ref={refButton}
              type="text"
              size="small"
              style={{ width: 78 }}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={onAddTags}
              onPressEnter={onAddTags}
            />
          )}
          {!inputVisible && (
            <Button size="small" type="dashed" onClick={showInput}>
              + Tambah komponen SQL
            </Button>
          )}
        </Form.Item>
      )}

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
          prefix={<ConsoleSqlOutlined />}
          placeholder={` Jawaban Benar . . .`}
        />
      </Form.Item>
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
