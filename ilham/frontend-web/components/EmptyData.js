import React from "react";
import { Empty, Button } from "antd";

function EmptyData({
  image = Empty.PRESENTED_IMAGE_SIMPLE,
  description = "Empty Data"
}) {
  return (
    <>
      <Empty
        image={image}
        imageStyle={{
          height: 60
        }}
        description={description}
      >
        <Button type="primary">Create Now</Button>
      </Empty>
      ,
    </>
  );
}

export default EmptyData;
