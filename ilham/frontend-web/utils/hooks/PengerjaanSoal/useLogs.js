import { useState } from "react";

const useLogs = (boxes, dataPertanyaan, timerLeftCounter, setCurrentPart) => {
  const [logData, setLogData] = useState([]);

  const saveLog = async (values, role) => {
    setLogData((tempLogData) => [
      ...tempLogData,
      {
        timer: timerLeftCounter,
        type: role,
        answer:
          dataPertanyaan?.QuestionLabel?.name === "Open-Ended"
            ? values?.jawaban_siswa
            : boxes?.sql_constructed?.items?.map((item) => item).join(" "),
        answer_json:
          role === "move"
            ? {
                from: values.source,
                to: values.destination,
              }
            : {},
      },
    ]);
  };

  const resetLog = () => {
    setLogData([]);
    setCurrentPart(null);
  };

  return [logData, saveLog, resetLog];
};

export default useLogs;
