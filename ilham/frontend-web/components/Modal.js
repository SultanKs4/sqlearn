import { Button, Modal, Input, Form } from "antd";

import { React, useState } from "react";
import { ucfirst } from "../utils/common";

function ModalCustom({
  role,
  entity,
  visible,
  setVisible,
  confirmLoading,
  setConfirmLoading,
  modalText,
  setModalText
}) {
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <Modal
      title={`${ucfirst(role)} ${ucfirst(entity)}`}
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={
        role !== "preview" ? (
          [
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={confirmLoading}
              onClick={handleOk}
            >
              Submit
            </Button>
          ]
        ) : (
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        )
      }
    >
      <p>{modalText}</p>
    </Modal>
  );
}

export default ModalCustom;
