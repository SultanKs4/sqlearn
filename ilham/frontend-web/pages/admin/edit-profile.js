import { React } from "react";

import Head from "next/head";
import { Card, Typography } from "antd";
import PageLayout from "../../components/PageLayout";

function EditProfile() {
  return (
    <>
      <Head>
        <title>SQLearn | Admin - Ubah Profile </title>
      </Head>
      <PageLayout role="admin">
        <Card>
          <Typography.Title level={3} style={{ marginBottom: "1em" }}>
            Ubah Profile Admin
          </Typography.Title>
        </Card>
      </PageLayout>
    </>
  );
}

export default EditProfile;
