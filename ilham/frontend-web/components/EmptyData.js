import React from "react";
import { Empty, Button } from "antd";

import { useRouter } from "next/router";

function EmptyData({
  image = Empty.PRESENTED_IMAGE_SIMPLE,
  description = "Empty Data",
  withAction = true,
  textAction = "Create Now",
  toURL = ""
}) {
  const router = useRouter();

  return (
    <>
      <Empty
        image={image}
        imageStyle={{
          height: 60
        }}
        description={description}
      >
        {withAction && (
          <Button type="primary" onClick={() => router.push(toURL)}>
            {textAction}
          </Button>
        )}
      </Empty>
    </>
  );
}

export default EmptyData;
