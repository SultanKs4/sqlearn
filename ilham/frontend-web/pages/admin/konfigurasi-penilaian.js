import { React, useState, useCallback } from "react";

import Head from "next/head";
import { Card, Collapse, Form, message, Typography } from "antd";
import PageLayout from "../../components/PageLayout";
import { useSession } from "next-auth/react";
import {
  getThreshold,
  updateThreshold,
} from "../../utils/remote-data/admin/Threshold";
import {
  getGradingRules,
  postGradingRules,
} from "../../utils/remote-data/admin/GradingRules";
import PanelGradingRules from "../../components/admin/PanelGradingRules";
import PanelThreshold from "../../components/admin/PanelThreshold";

function KonfigurasiPenilaian() {
  const { data: session } = useSession();
  const { Panel } = Collapse;

  const [dataThreshold, setDataThreshold] = useState([]);
  const [isDataThresholdLoaded, setIsDataThresholdLoaded] = useState(false);

  const [dataGradingRules, setDataGradingRules] = useState([]);
  const [isGradingRulesLoaded, setIsGradingRulesLoaded] = useState(false);

  const fetchDataThreshold = useCallback(() => {
    if (session !== undefined)
      getThreshold(session.user.tokenJWT).then((res) => {
        setDataThreshold(res.data);
        setIsDataThresholdLoaded(true);
      });
  }, [session]);

  const fetchDataGradingRules = useCallback(() => {
    if (session !== undefined)
      getGradingRules(session.user.tokenJWT).then((res) => {
        setDataGradingRules(res.data);
        setIsGradingRulesLoaded(true);
      });
  }, [session]);

  const onFinish = (values) => {
    console.log(values);
    if ("threshold" in values)
      updateThreshold(session.user.tokenJWT, values)
        .then(() => {
          fetchDataThreshold();
          message.success(
            `Threshold telah diperbarui menjadi ${values.threshold}`
          );
        })
        .catch(() => message.error("Threshold gagal diperbarui"));
    else
      postGradingRules(session.user.tokenJWT, values)
        .then(() => {
          fetchDataGradingRules();
          message.success(`Grading Rules telah ditambahkan`);
        })
        .catch(() => message.error("Grading Rules gagal ditambahkan"));
  };

  const onchangePanel = (key) => {
    if (key !== undefined) {
      if (key === "grading-rules") fetchDataGradingRules();
      else if (key === "threshold") fetchDataThreshold();
    }
  };

  return (
    <>
      <Head>
        <title>SQLearn | Admin - Konfigurasi </title>
      </Head>
      <PageLayout role="admin">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Konfigurasi Penilaian
          </Typography.Title>

          <Collapse accordion onChange={onchangePanel}>
            <Panel header="Grading Rules" key="grading-rules">
              <PanelGradingRules
                onFinish={onFinish}
                dataGradingRules={dataGradingRules}
                isGradingRulesLoaded={isGradingRulesLoaded}
                fetchDataGradingRules={fetchDataGradingRules}
              />
            </Panel>
            <Panel header="Pengaturan Threshold" key="threshold">
              <PanelThreshold
                onFinish={onFinish}
                dataThreshold={dataThreshold}
                isDataThresholdLoaded={isDataThresholdLoaded}
              />
            </Panel>
          </Collapse>
        </Card>
      </PageLayout>
    </>
  );
}

export default KonfigurasiPenilaian;
