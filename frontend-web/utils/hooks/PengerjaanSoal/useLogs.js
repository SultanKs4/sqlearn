import { useState } from "react";

const useLogs = (
  boxes,
  dataPertanyaan,
  timerLeftCounter,
  timerUp,
  setCurrentPart
) => {
  const [logData, setLogData] = useState([]);

  const saveLog = async (values, role) => {
    setLogData((tempLogData) => [
      ...tempLogData,
      {
        // ? Ini sebelum revisi
        // timer: timerLeftCounter,
        // ? Ini habis revisi pak Khairy tgl 21 April 2022
        timer: timerUp,

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
