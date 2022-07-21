import { Modal } from "antd";

import { React } from "react";
import { ucfirst } from "../utils/common";

function ModalCustom({
  role,
  entity,
  visible,
  setVisible,
  modalText,
  modalContent,
}) {
  return (
    <Modal
      title={`${ucfirst(role)} ${ucfirst(entity)}`}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      {modalContent}
      <p>{modalText}</p>
    </Modal>
  );
}

export default ModalCustom;
