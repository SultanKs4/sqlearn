import { Col, Radio, Row, Typography } from "antd";

function RibbonFilter({ setIsFilterActive, setEntityFiltered, data }) {
  const filterCategory = (e) => {
    e.target.value === "Semua"
      ? setIsFilterActive(false)
      : setIsFilterActive(true);

    setEntityFiltered(
      data.filter((item) => {
        if (e.target.value === "Tanpa Kategori") return item?.kategori === "-";
        else
          return item?.kategori?.toLowerCase() === e.target.value.toLowerCase();
      })
    );
  };
  return (
    <Row style={{ marginBottom: "1em" }} justify="space-between" gutter={8}>
      <Col>
        {" "}
        <Typography.Title level={4} children={<>Pilih Kategori </>} />{" "}
      </Col>
      <Col>
        <Radio.Group
          defaultValue="Semua"
          buttonStyle="solid"
          onChange={(e) => filterCategory(e)}
        >
          <Row justify="center" gutter={8}>
            <Col>
              <Radio.Button value="Semua">Semua</Radio.Button>
            </Col>
            <Col>
              <Radio.Button value="Close-Ended">Close-Ended</Radio.Button>
            </Col>
            <Col>
              <Radio.Button value="Open-Ended">Open-Ended</Radio.Button>
            </Col>
            <Col>
              <Radio.Button value="Tanpa Kategori">Tanpa Kategori</Radio.Button>
            </Col>
          </Row>
        </Radio.Group>
      </Col>
    </Row>
  );
}

export default RibbonFilter;
